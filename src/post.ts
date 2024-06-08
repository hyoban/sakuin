import type {
  NoteEntity,
  NoteMetadata,
  NoteMetadataAttachmentBase,
  Numberish,
} from 'crossbell'
import { nanoid } from 'nanoid'

import { graphql } from '../gql'
import type { Language } from '.'
import type { ClientBase } from './context'
import type {
  HandleOrCharacterId,
  NoteType,
  Post,
  PostInput,
  Short,
  ShortInput,
} from './types'
import type { NoteQueryOptions, ResultMany } from './types/utils'
import { getXLogMeta, toCid, toGateway } from './utils'

interface ContentTranslation {
  title?: string
  content?: string
}

const noteQuery = graphql(`
  query getNotes($characterId: Int!, $slug: JSON!, $tag: JSON!) {
    notes(
      where: {
        characterId: { equals: $characterId }
        deleted: { equals: false }
        metadata: {
          content: { path: ["sources"], array_contains: ["xlog"] }
          AND: [
            {
              content: {
                path: ["attributes"]
                array_contains: [{ trait_type: "xlog_slug", value: $slug }]
              }
            }
            { content: { path: ["tags"], array_contains: $tag } }
          ]
        }
      }
      orderBy: [{ createdAt: desc }]
      take: 1
    ) {
      characterId
      noteId
      uri
      metadata {
        uri
        content
      }
      owner
      createdAt
      updatedAt
      publishedAt
      transactionHash
      blockNumber
      updatedTransactionHash
      updatedBlockNumber
    }
  }
`)

interface CreateOptions {
  raw?: boolean
  translate?: { from?: Language, to: Language }
}

type UpdateOptions<Tag extends Exclude<NoteType, 'portfolio'>> = {
  token: string
  handleOrCharacterId: HandleOrCharacterId
  note: Partial<Tag extends 'short' ? ShortInput : PostInput>
} & ({ noteId: number } | { slug: string })

export class NoteClient<
  Tag extends Exclude<NoteType, 'portfolio'>,
  Input = Tag extends 'short' ? ShortInput : PostInput,
  Output = Tag extends 'short' ? Short : Post,
> {
  constructor(
    private base: ClientBase,
    private tag: Tag,
  ) {}

  async getAll(
    handleOrCharacterId: HandleOrCharacterId,
    options?: Omit<NoteQueryOptions, 'cursor' | 'limit'> & CreateOptions,
  ): Promise<Output[]> {
    const result: Output[] = []

    let currentCursor: string | null = null
    const { list, count, cursor } = await this.getMany(
      handleOrCharacterId,
      options,
    )
    result.push(...list)
    currentCursor = cursor

    while (result.length < count && currentCursor) {
      const { list, cursor: nextCursor } = await this.getMany(
        handleOrCharacterId,
        { ...options, cursor: currentCursor },
      )
      result.push(...list)
      currentCursor = nextCursor
    }

    return result
  }

  async getMany(
    handleOrCharacterId: HandleOrCharacterId,
    options?: NoteQueryOptions & CreateOptions,
  ): Promise<ResultMany<Output>> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { indexer } = this.base.context

    const notes = await indexer.note.getMany({
      characterId,
      tags: this.tag,
      sources: 'xlog',
      orderBy: options?.orderBy ?? 'publishedAt',
      ...options,
    })

    const list = await Promise.all(
      notes.list.map(note => this.createFromNote(note, characterId, options)),
    )

    return {
      list,
      count: notes.count,
      cursor: notes.cursor,
    }
  }

  async get(
    handleOrCharacterId: HandleOrCharacterId,
    noteId: Numberish,
    options?: CreateOptions,
  ): Promise<Output | null> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { indexer } = this.base.context

    const note = await indexer.note.get(characterId, noteId)
    if (!note)
      return null

    return this.createFromNote(note, characterId, options)
  }

  async getBySlug(
    handleOrCharacterId: HandleOrCharacterId,
    slug: string,
    options?: CreateOptions,
  ): Promise<Output | null> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { client } = this.base.context

    const note = await client.query(noteQuery, {
      characterId,
      slug,
      tag: this.tag,
    })
    const post = note.data?.notes.at(0)
    if (!post)
      return null
    return this.createFromNote(post as NoteEntity, characterId, options)
  }

  private ensureToken(token: string) {
    const { indexer } = this.base.context
    if (!indexer.siwe.token && !token)
      throw new Error('Missing token')
    if (!indexer.siwe.token)
      indexer.siwe.token = token
  }

  async put({
    token,
    handleOrCharacterId,
    note,
  }: {
    token: string
    handleOrCharacterId: HandleOrCharacterId
    note: Input
  }) {
    this.ensureToken(token)
    const { indexer } = this.base.context
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const metadata = this.createNoteMetaFromInput({
      values: note,
      autofill: true,
    })

    return indexer.siwe.putNote({
      characterId,
      metadata,
    })
  }

  async update({
    token,
    handleOrCharacterId,
    note,
    ...options
  }: UpdateOptions<Tag>) {
    this.ensureToken(token)
    const { indexer } = this.base.context
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const noteToUpdate
      = 'noteId' in options
        ? await this.get(characterId, options.noteId)
        : await this.getBySlug(characterId, options.slug)
    if (!noteToUpdate)
      throw new Error('Post not found')

    const { noteId } = noteToUpdate as unknown as NoteEntity
    const metadata = this.createNoteMetaFromInput({
      values: { ...noteToUpdate, ...this.clearUnknownAttributes(note) },
    })

    return indexer.siwe.updateNote({
      characterId,
      noteId,
      metadata,
    })
  }

  private clearUnknownAttributes(
    input?: Record<string, unknown> | null,
  ): Partial<Input> {
    if (typeof input !== 'object' || !input)
      return {}
    const keys = Object.keys(input)
    const result: Partial<Input> = {}
    for (const key of keys) {
      if (
        [
          'title',
          'content',
          'datePublishedAt',
          'summary',
          'tags',
          'slug',
          'disableAISummary',
          'cover',
        ].includes(key)
      ) {
        result[key as keyof Input] = input[key] as never
      }
    }
    return result
  }

  private createNoteMetaFromInput({
    values,
    autofill,
  }: {
    values: Partial<Input>
    autofill?: boolean
  }): NoteMetadata & { summary?: string } {
    if (this.tag === 'short') {
      const short = values as unknown as Partial<ShortInput>
      return {
        attributes: [
          {
            trait_type: 'xlog_slug',
            value: short.slug || (autofill ? nanoid() : ''),
          },
        ],
        tags: [this.tag],
        title: '',
        content: short.content,
        attachments: short.attachments,
        sources: ['xlog'],
        date_published:
          short.datePublishedAt
          || (autofill ? new Date().toISOString() : undefined),
      }
    }

    const post = values as unknown as Partial<PostInput>
    return {
      attributes: [
        {
          trait_type: 'xlog_slug',
          value: post.slug || (autofill ? nanoid() : ''),
        },
        ...(post.disableAISummary
          ? [
              {
                trait_type: 'xlog_disable_ai_summary',
                value: post.disableAISummary,
              },
            ]
          : []),
      ],
      tags: [
        this.tag,
        ...(post.tags ?? []).map((tag: string) => tag.trim()).filter(Boolean),
      ],
      title: post.title,
      content: post.content,
      attachments: post.cover ? [{ name: 'cover', address: post.cover }] : [],
      sources: ['xlog'],
      date_published:
        post.datePublishedAt
        || (autofill ? new Date().toISOString() : undefined),
      summary: post.summary,
    }
  }

  private async createFromNote(
    note: NoteEntity,
    characterId: number,
    options?: CreateOptions,
  ): Promise<Output> {
    const { raw = false, translate } = options ?? {}
    const { xLogBase } = this.base.context
    const { noteId } = note
    const interaction = await this.base.getNoteInteractionCount(
      characterId,
      noteId,
    )

    let translation: ContentTranslation | undefined = undefined
    if (
      options?.translate
      && note.uri
      && options.translate.from !== options.translate.to
    ) {
      const response = await fetch(
        `https://${xLogBase}/api/translate-note?cid=${toCid(note.uri)}&toLang=${options.translate.to}${options.translate.from ? `&fromLang=${options.translate.from}` : ''}`,
      )
      const json = (await response.json()) as { data: ContentTranslation }
      translation = json.data
    }

    const rawContent
      = translation?.content ?? note.metadata?.content?.content ?? ''
    const content = raw ? rawContent : toGateway(rawContent)!
    const match = content.match(/!\[.*?\]\(.*?\)/g)
    const imagesInContent
      = match?.map(img => (/\((.*?)\)/.exec(img))?.[1]) ?? []

    const rawAttachments = (note.metadata?.content?.attachments ?? []) as Array<
      NoteMetadataAttachmentBase<'address'>
    >
    const attachments = rawAttachments
      .filter(att => att.address)
      .map(att => ({
        ...att,
        address: raw ? att.address : toGateway(att.address),
      }))
    const coverInAttachments = attachments.find(att => att.name === 'cover')
    const cover
      = coverInAttachments?.address ?? (raw ? '' : imagesInContent.at(0) ?? '')

    // @ts-expect-error FIXME: https://github.com/Crossbell-Box/crossbell.js/issues/83#issuecomment-1987235215
    let summary = (note.metadata?.content?.summary as string | undefined) ?? ''
    const disableAISummary = !!getXLogMeta(
      note.metadata?.content?.attributes,
      'disable_ai_summary',
    )
    if (!disableAISummary && !raw && !summary && note.uri) {
      const res = await fetch(
        `https://${xLogBase}/api/summary?cid=${toCid(note.uri)}${translate?.to ? `&lang=${translate.to}` : ''}`,
      )
      const json = (await res.json()) as { summary: string | null }
      summary = json.summary ?? ''
    }

    const datePublishedAt = note.metadata?.content?.date_published ?? ''
    const slug = getXLogMeta(note.metadata?.content?.attributes, 'slug') ?? ''
    const title = translation?.title ?? note.metadata?.content?.title ?? ''
    const tags
      = note.metadata?.content?.tags?.filter((tag: string) => tag !== 'post')
      ?? []

    if (this.tag === 'short') {
      return {
        characterId: note.characterId,
        noteId: note.noteId,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
        publishedAt: note.publishedAt,
        deletedAt: note.deletedAt,
        uri: note.uri,
        views: interaction.views,
        likes: interaction.likes,
        comments: interaction.comments,
        tips: interaction.tips,
        title,
        content,
        datePublishedAt,
        slug,
        attachments,
        lang: translate?.to ?? translate?.from,
      } satisfies Short as Output
    }

    return {
      characterId: note.characterId,
      noteId: note.noteId,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt,
      publishedAt: note.publishedAt,
      deletedAt: note.deletedAt,
      uri: note.uri,
      views: interaction.views,
      likes: interaction.likes,
      comments: interaction.comments,
      tips: interaction.tips,
      title,
      slug,
      datePublishedAt,
      tags,
      summary,
      cover,
      content,
      disableAISummary,
      lang: translate?.to ?? translate?.from,
    } satisfies Post as Output
  }
}
