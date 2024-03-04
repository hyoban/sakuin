import type { NoteEntity } from 'crossbell'

import { indexer } from './indexer'
import { getSiteInfo } from './site'
import type { NoteQueryOptions, Portfolio } from './types'
import { convertIpfsUrl } from './utils'

export async function getPortfolioMany(handle: string, options?: NoteQueryOptions): Promise<Portfolio[]> {
  const { characterId } = await getSiteInfo(handle)

  const notes = await indexer.note.getMany({
    characterId,
    tags: 'portfolio',
    sources: 'xlog',
    ...options,
  })

  return notes.list.map(note => createPortfolioFromNote(note))
}

export async function getPortfolio(handle: string, noteId: string): Promise<Portfolio | null> {
  const { characterId } = await getSiteInfo(handle)
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
