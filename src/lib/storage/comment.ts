import type { Numberish } from 'crossbell'

import type { ClientBase } from './context'
import type { SiteClient } from './site'
import type { Comment, CommentInput, HandleOrCharacterId } from './types'
import type { NoteQueryOptions, ResultMany } from './types/utils'
import { getXLogMeta } from './utils'

export class CommentClient {
  constructor(
    private base: ClientBase,
    private siteClient: SiteClient,
  ) {}

  async getAll(
    handleOrCharacterId: HandleOrCharacterId,
    noteId: Numberish,
    options?: Omit<NoteQueryOptions, 'cursor' | 'limit'>,
  ): Promise<Comment[]> {
    const result: Comment[] = []

    let currentCursor: string | null = null
    const { list, count, cursor } = await this.getMany(handleOrCharacterId, noteId, options)
    result.push(...list)
    currentCursor = cursor

    while (result.length < count && currentCursor) {
      const { list, cursor: nextCursor } = await this.getMany(handleOrCharacterId, noteId, { ...options, cursor: currentCursor })
      result.push(...list)
      currentCursor = nextCursor
    }

    return result
  }

  async getMany(
    handleOrCharacterId: HandleOrCharacterId,
    noteId: Numberish,
    options?: NoteQueryOptions,
  ): Promise<ResultMany<Comment>> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { indexer } = this.base.context

    const res = await indexer.note.getMany(
      {
        ...options,
        toCharacterId: characterId,
        toNoteId: noteId,
      },
    )

    const comments: Comment[] = res.list.map((note) => {
      const senderName = getXLogMeta(note.metadata?.content?.attributes, 'sender_name')
      const senderEmail = getXLogMeta(note.metadata?.content?.attributes, 'sender_email')
      const senderUrl = getXLogMeta(note.metadata?.content?.attributes, 'sender_url')

      return {
        characterId: note.characterId,
        noteId: note.noteId,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
        publishedAt: note.publishedAt,
        deletedAt: note.deletedAt,
        uri: note.uri,
        targetCharacterId: note.toCharacterId!,
        targetNoteId: note.toNoteId!,
        content: note.metadata?.content?.content ?? '',
        replies: [],
        name: senderName ?? '',
        email: senderEmail ?? '',
        url: senderUrl ?? '',
        comments: 0,
        likes: 0,
        views: 0,
        tips: 0,
      }
    })

    const commentsWithReplies: Comment[] = await Promise.all(
      comments.map(async (comment) => {
        if (comment.name === '') {
          const siteInfo = await this.siteClient.getInfo(comment.characterId)
          comment.name = siteInfo.characterName ?? ''
          comment.url = siteInfo.xlogUrl
        }
        const interaction = await this.base.getNoteInteractionCount(comment.characterId, comment.noteId)
        if (interaction.comments === 0)
          return { ...comment, ...interaction }

        const { list: replies } = await this.getMany(comment.characterId, comment.noteId, options)
        return { ...comment, replies, ...interaction }
      }),
    )

    return {
      list: commentsWithReplies,
      count: res.count,
      cursor: res.cursor,
    }
  }

  async putAnonymous(commentInput: CommentInput) {
    const { xLogBase } = this.base.context
    const result = await fetch(
      `https://${xLogBase}/api/anonymous/comment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentInput),
      },
    )
    return await result.json() as { error: string } | { data: { noteId: string } }
  }
}
