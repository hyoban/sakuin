import type { Numberish } from 'crossbell'

import { getSiteInfo } from '.'
import { ClientContext, useContext } from './context'
import type { Comment, HandleOrCharacterId, NoteQueryOptions, ResultMany } from './types'
import { getCharacterId, getNoteInteractionCount, getXLogMeta } from './utils'

export async function getCommentFull(
  handleOrCharacterId: HandleOrCharacterId,
  noteId: Numberish,
  options?: Omit<NoteQueryOptions, 'cursor' | 'limit'>,
): Promise<Comment[]> {
  const result: Comment[] = []

  let currentCursor: string | null = null
  const { list, count, cursor } = await getCommentMany(handleOrCharacterId, noteId, options)
  result.push(...list)
  currentCursor = cursor

  while (result.length < count && currentCursor) {
    const { list, cursor: nextCursor } = await getCommentMany(handleOrCharacterId, noteId, { ...options, cursor: currentCursor })
    result.push(...list)
    currentCursor = nextCursor
  }

  return result
}

export async function getCommentMany(
  handleOrCharacterId: HandleOrCharacterId,
  noteId: Numberish,
  options?: NoteQueryOptions,
): Promise<ResultMany<Comment>> {
  const characterId = await getCharacterId(handleOrCharacterId)
  const { indexer } = useContext(ClientContext)

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
      content: note.metadata?.content?.content ?? '',
      createdAt: note.createdAt,
      updatedAt: note.updatedAt,
      publishedAt: note.publishedAt,
      deletedAt: note.deletedAt,
      replies: [],
      sender: {
        name: senderName ?? '',
        email: senderEmail ?? '',
        url: senderUrl ?? '',
      },
      comments: 0,
      likes: 0,
      views: 0,
      tips: 0,
    }
  })

  const commentsWithReplies: Comment[] = await Promise.all(
    comments.map(async (comment) => {
      if (comment.sender.name === '') {
        const siteInfo = await getSiteInfo(comment.characterId)
        comment.sender.name = siteInfo.characterName ?? ''
        comment.sender.url = siteInfo.xlogUrl
      }
      const interaction = await getNoteInteractionCount(comment.characterId, comment.noteId)
      if (interaction.comments === 0)
        return { ...comment, ...interaction }

      const { list: replies } = await getCommentMany(comment.characterId, comment.noteId, options)
      return { ...comment, replies, ...interaction }
    }),
  )

  return {
    list: commentsWithReplies,
    count: res.count,
    cursor: res.cursor,
  }
}
