import type { NoteEntity, Numberish } from 'crossbell'

import { graphql } from '../../gql'
import type { ClientBase } from './context'
import type { HandleOrCharacterId, NoteQueryOptions, Post, ResultMany } from './types'
import { getXLogMeta, toCid, toGateway } from './utils'

const noteQuery = graphql(`
query getNotes($characterId: Int!, $slug: JSON!) {
  notes(
    where: {
      characterId: { equals: $characterId }
      deleted: { equals: false }
      metadata: {
        content: { path: ["sources"], array_contains: ["xlog"] }
        OR: [
          {
            content: {
              path: ["attributes"]
              array_contains: [{ trait_type: "xlog_slug", value: $slug }]
            }
          }
          { content: { path: ["title"], equals: $slug } }
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

export class PostClient {
  constructor(private base: ClientBase, private tag: 'post' | 'short' | 'page' = 'post') {}

  async getAll(
    handleOrCharacterId: HandleOrCharacterId,
    options?: Omit<NoteQueryOptions, 'cursor' | 'limit'>,
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
    options?: NoteQueryOptions,
  ): Promise<ResultMany<Post>> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { indexer } = this.base.context

    const notes = await indexer.note.getMany({
      characterId,
      tags: this.tag,
      sources: 'xlog',
      ...options,
    })

    const list = await Promise.all(notes.list.map(note => this.createPostFromNote(note, characterId)))

    return {
      list,
      count: notes.count,
      cursor: notes.cursor,
    }
  }

  async get(
    handleOrCharacterId: HandleOrCharacterId,
    noteId: Numberish,
  ): Promise<Post | null> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { indexer } = this.base.context

    const note = await indexer.note.get(characterId, noteId)
    if (!note)
      return null

    return this.createPostFromNote(note, characterId)
  }

  async getBySlug(
    handleOrCharacterId: HandleOrCharacterId,
    slug: string,
  ): Promise<Post | null> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { client } = this.base.context

    const note = await client.query(noteQuery, { characterId, slug })
    const post = note.data?.notes.at(0)
    if (!post)
      return null
    return this.createPostFromNote(post as NoteEntity, characterId)
  }

  private postFilter = (att: { name?: string }) => att.name === 'cover'
  private shortFilter = (att: { name?: string }) => att.name === 'image'

  private async createPostFromNote(
    note: NoteEntity,
    characterId: number,
  ): Promise<Post> {
    const { xLogBase } = this.base.context
    const { noteId } = note
    const interaction = await this.base.getNoteInteractionCount(characterId, noteId)

    const content = toGateway(note.metadata?.content?.content) ?? ''
    const match = content.match(/!\[.*?]\((.*?)\)/g)
    const imagesInContent = match?.map(img => img.match(/\((.*?)\)/)?.[1]) ?? []

    const cover = toGateway(
      note.metadata?.content?.attachments
        ?.find(
          this.tag === 'post' ? this.postFilter : this.shortFilter,
        )
        ?.address,
    ) ?? imagesInContent.at(0)

    // @ts-expect-error FIXME: https://github.com/Crossbell-Box/crossbell.js/issues/83#issuecomment-1987235215
    let summary = note.metadata?.content?.summary as string | undefined ?? ''
    const disableAISummary = getXLogMeta(note.metadata?.content?.attributes, 'disable_ai_summary')
    if (!disableAISummary && !summary && note.uri) {
      const res = await fetch(`https://${xLogBase}/api/ai-summary?cid=${toCid(note.uri)}&lang=zh`)
      const json = await res.json() as { summary: string | null }
      summary = json.summary ?? ''
    }

    return {
      ...note,
      title: note.metadata?.content?.title ?? '',
      slug: getXLogMeta(note.metadata?.content?.attributes, 'slug') ?? '',
      date: note.metadata?.content?.date_published ?? '',
      tags: note.metadata?.content?.tags?.filter((tag: string) => tag !== 'post') ?? [],
      summary,
      cover,
      content,
      ...interaction,
    }
  }
}
