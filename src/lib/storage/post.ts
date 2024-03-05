import type { NoteEntity } from 'crossbell'

import { indexer } from './indexer'
import type { HandleOrCharacterId, NoteQueryOptions, Post } from './types'
import { convertIpfsUrl, getCharacterId, getXLogMeta } from './utils'

export async function getPostMany(
  handleOrCharacterId: HandleOrCharacterId,
  options?: NoteQueryOptions,
): Promise<Post[]> {
  const characterId = await getCharacterId(handleOrCharacterId)

  const notes = await indexer.note.getMany({
    characterId,
    tags: 'post',
    sources: 'xlog',
    ...options,
  })

  return Promise.all(notes.list.map(note => createPostFromNote(note, characterId)))
}

export async function getPost(
  handleOrCharacterId: HandleOrCharacterId,
  noteId: string,
): Promise<Post | null> {
  const characterId = await getCharacterId(handleOrCharacterId)

  const note = await indexer.note.get(characterId, noteId)
  if (!note)
    return null

  return createPostFromNote(note, characterId)
}

async function createPostFromNote(
  note: NoteEntity,
  characterId: number,
): Promise<Post> {
  const { noteId } = note
  const [
    views,
    likes,
    comments,
  ] = await Promise.all([
    indexer.stat.getForNote(characterId, noteId),
    indexer.link.getBacklinksByNote(characterId, noteId, { linkType: 'like' }),
    indexer.note.getMany({ toCharacterId: characterId, toNoteId: noteId }),
  ])

  return {
    noteId: note.noteId,
    title: note.metadata?.content?.title ?? '',
    slug: getXLogMeta(note.metadata?.content?.attributes, 'slug') ?? '',
    date: note.metadata?.content?.date_published ?? '',
    tags: note.metadata?.content?.tags?.filter((tag: string) => tag !== 'post') ?? [],
    // @ts-expect-error TODO: summary is not in the type
    summary: note.metadata?.content?.summary as string | undefined ?? '',
    cover: convertIpfsUrl(note.metadata?.content?.attachments?.find(att => att.name === 'cover')?.address) ?? '',
    content: note.metadata?.content?.content ?? '',
    views: views.viewDetailCount,
    likes: likes.count,
    comments: comments.count,
  }
}
