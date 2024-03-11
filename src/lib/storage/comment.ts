import type { Numberish } from 'crossbell'

import { getSiteInfo } from '.'
import { indexer } from './indexer'
import type { Comment, HandleOrCharacterId, NoteQueryOptions } from './types'
import { getCharacterId, getNoteInteractionCount, getXLogMeta } from './utils'

export async function getComment(
  handleOrCharacterId: HandleOrCharacterId,
  noteId: Numberish,
  options?: NoteQueryOptions,
): Promise<Comment[]> {
  const characterId = await getCharacterId(handleOrCharacterId)

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
      replies: [],
      sender: {
        name: senderName ?? '',
        email: senderEmail ?? '',
        url: senderUrl ?? '',
      },
      comments: 0,
      likes: 0,
      views: 0,
    }
  })

  const commentsWithReplies = await Promise.all(
    comments.map(async (comment) => {
      const [
        replies,
        interaction,
      ] = await Promise.all([
        getComment(comment.characterId, comment.noteId, options),
        getNoteInteractionCount(comment.characterId, comment.noteId),
      ])
      if (comment.sender.name === '') {
        const siteInfo = await getSiteInfo(comment.characterId)
        comment.sender.name = siteInfo.characterName ?? ''
        comment.sender.url = siteInfo.xlogUrl
      }
      return { ...comment, replies, ...interaction }
    }),
  )

  return commentsWithReplies
}
