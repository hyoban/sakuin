import type { NoteEntity } from 'crossbell'

import { indexer } from './indexer'
import type { HandleOrCharacterId, NoteQueryOptions, Portfolio } from './types'
import { convertIpfsUrl, getCharacterId } from './utils'

export async function getPortfolioMany(
  handleOrCharacterId: HandleOrCharacterId,
  options?: NoteQueryOptions,
): Promise<Portfolio[]> {
  const characterId = await getCharacterId(handleOrCharacterId)

  const notes = await indexer.note.getMany({
    characterId,
    tags: 'portfolio',
    sources: 'xlog',
    ...options,
  })

  return notes.list.map(note => createPortfolioFromNote(note))
}

export async function getPortfolio(
  handleOrCharacterId: HandleOrCharacterId,
  noteId: string,
): Promise<Portfolio | null> {
  const characterId = await getCharacterId(handleOrCharacterId)
  const note = await indexer.note.get(characterId, noteId)
  return note ? createPortfolioFromNote(note) : null
}

function createPortfolioFromNote(note: NoteEntity): Portfolio {
  return {
    noteId: note.noteId,
    title: note.metadata?.content?.title ?? '',
    link: note.metadata?.content?.external_urls?.at(0) ?? '',
    date: note.metadata?.content?.date_published ?? '',
    // @ts-expect-error TODO: summary is not in the type
    summary: note.metadata?.content?.summary as string | undefined ?? '',
    cover: convertIpfsUrl(note.metadata?.content?.attachments?.find(att => att.name === 'cover')?.address) ?? '',
  }
}
