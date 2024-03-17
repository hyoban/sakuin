import type { NoteEntity, NoteMetadata, Numberish } from 'crossbell'
import { nanoid } from 'nanoid'

import { graphql } from '../../gql'
import type { ClientBase } from './context'
import type { HandleOrCharacterId, NoteQueryOptions, NoteType, Post, PostInput, ResultMany } from './types'
import { getXLogMeta, toCid, toGateway } from './utils'

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
          {
            content: {
              path: ["tags"]
              array_contains: $tag
            }
          }
        ]
      }
    }
    orderBy: [{ createdAt: desc }]
    take: 1
  ) {
    characterId
    noteId
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

type CreateOptions = { convertUrlToGateway?: boolean }

type UpdateOptions = {
  token: string,
  handleOrCharacterId: HandleOrCharacterId,
  post: Partial<PostInput>,
} & ({ noteId: number } | { slug: string })

export class PostClient {
  constructor(
    private base: ClientBase,
    private tag: Exclude<NoteType, 'portfolio'> = 'post',
  ) {}

  async getAll(
    handleOrCharacterId: HandleOrCharacterId,
    options?: Omit<NoteQueryOptions, 'cursor' | 'limit'> & CreateOptions,
  ): Promise<Post[]> {
    const result: Post[] = []

    let currentCursor: string | null = null
    const { list, count, cursor } = await this.getMany(handleOrCharacterId, options)
    result.push(...list)
    currentCursor = cursor

    while (result.length < count && currentCursor) {
      const { list, cursor: nextCursor } = await this.getMany(handleOrCharacterId, { ...options, cursor: currentCursor })
      result.push(...list)
      currentCursor = nextCursor
    }

    return result
  }

  async getMany(
    handleOrCharacterId: HandleOrCharacterId,
    options?: NoteQueryOptions & CreateOptions,
  ): Promise<ResultMany<Post>> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { indexer } = this.base.context

    const notes = await indexer.note.getMany({
      characterId,
      tags: this.tag,
      sources: 'xlog',
      orderBy: options?.orderBy ?? 'publishedAt',
      ...options,
    })

    const list = await Promise.all(notes.list.map(note => this.createPostFromNote(note, characterId, options)))

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
  ): Promise<Post | null> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { indexer } = this.base.context

    const note = await indexer.note.get(characterId, noteId)
    if (!note)
      return null

    return this.createPostFromNote(note, characterId, options)
  }

  async getBySlug(
    handleOrCharacterId: HandleOrCharacterId,
    slug: string,
    options?: CreateOptions,
  ): Promise<Post | null> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { client } = this.base.context

    const note = await client.query(noteQuery, { characterId, slug, tag: this.tag })
    const post = note.data?.notes.at(0)
    if (!post)
      return null
    return this.createPostFromNote(post as NoteEntity, characterId, options)
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
    post,
  }: {
    token: string,
    handleOrCharacterId: HandleOrCharacterId,
    post: PostInput,
  }) {
    this.ensureToken(token)
    const { indexer } = this.base.context
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const metadata = this.createNoteMetaFromPostInput({
      values: post,
      type: this.tag,
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
    post,
    ...options
  }: UpdateOptions) {
    this.ensureToken(token)
    const { indexer } = this.base.context
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const postToUpdate = ('noteId' in options)
      ? await this.get(characterId, options.noteId)
      : await this.getBySlug(characterId, options.slug)
    if (!postToUpdate)
      throw new Error('Post not found')

    const { noteId } = postToUpdate
    const metadata = this.createNoteMetaFromPostInput({
      values: { ...postToUpdate, ...this.clearUnknownAttributes(post) },
      type: this.tag,
    })

    return indexer.siwe.updateNote({
      characterId,
      noteId,
      metadata,
    })
  }

  private clearUnknownAttributes(input?: Record<string, unknown> | null): Partial<PostInput> {
    if (typeof input !== 'object' || !input)
      return {}
    const keys = Object.keys(input)
    const result: Partial<PostInput> = {}
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
      )
        result[key as keyof PostInput] = input[key] as never
    }
    return result
  }

  private createNoteMetaFromPostInput({
    values,
    type,
    autofill,
  }: {
    values: Partial<PostInput>,
    type: Exclude<NoteType, 'portfolio'>,
    autofill?: boolean,
  }): NoteMetadata & { summary?: string } {
    return {
      attributes: [
        {
          trait_type: 'xlog_slug',
          value: values.slug || (autofill ? nanoid() : ''),
        },
        ...(values.disableAISummary
          ? [
              {
                trait_type: 'xlog_disable_ai_summary',
                value: values.disableAISummary,
              },
            ]
          : []),
      ],
      tags: [type, ...(values.tags ?? []).map((tag: string) => tag.trim()).filter(Boolean)],
      title: values.title,
      content: values.content,
      attachments: values.cover ? [{ name: 'cover', address: values.cover }] : [],
      sources: ['xlog'],
      date_published: values.datePublishedAt || (autofill ? new Date().toISOString() : undefined),
      summary: values.summary,
    }
  }

  private postFilter = (att: { name?: string }) => att.name === 'cover'
  private shortFilter = (att: { name?: string }) => att.name === 'image'

  private async createPostFromNote(
    note: NoteEntity,
    characterId: number,
    options?: CreateOptions,
  ): Promise<Post> {
    const { convertUrlToGateway = true } = options ?? {}
    const { xLogBase } = this.base.context
    const { noteId } = note
    const interaction = await this.base.getNoteInteractionCount(characterId, noteId)

    const content = convertUrlToGateway
      ? toGateway(note.metadata?.content?.content) ?? ''
      : note.metadata?.content?.content ?? ''
    const match = content.match(/!\[.*?]\((.*?)\)/g)
    const imagesInContent = match?.map(img => img.match(/\((.*?)\)/)?.[1]) ?? []

    const coverInAttachments = note.metadata?.content?.attachments?.find(this.tag === 'post' ? this.postFilter : this.shortFilter)
    const cover = (convertUrlToGateway
      ? toGateway(coverInAttachments?.address) ?? imagesInContent.at(0)
      : coverInAttachments?.address ?? imagesInContent.at(0)) ?? ''

    // @ts-expect-error FIXME: https://github.com/Crossbell-Box/crossbell.js/issues/83#issuecomment-1987235215
    let summary = note.metadata?.content?.summary as string | undefined ?? ''
    const disableAISummary = !!getXLogMeta(note.metadata?.content?.attributes, 'disable_ai_summary')
    if (!disableAISummary && !summary && note.uri) {
      const res = await fetch(`https://${xLogBase}/api/ai-summary?cid=${toCid(note.uri)}&lang=zh`)
      const json = await res.json() as { summary: string | null }
      summary = json.summary ?? ''
    }

    return {
      ...note,
      title: note.metadata?.content?.title ?? '',
      slug: getXLogMeta(note.metadata?.content?.attributes, 'slug') ?? '',
      datePublishedAt: note.metadata?.content?.date_published ?? '',
      tags: note.metadata?.content?.tags?.filter((tag: string) => tag !== 'post') ?? [],
      summary,
      cover,
      content,
      disableAISummary,
      ...interaction,
    }
  }
}
