import type { NoteEntity } from 'crossbell'

import { indexer } from './indexer'
import type { HandleOrCharacterId, NoteQueryOptions, Portfolio } from './types'
import type { UnghResponse } from './types/github'
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

  return Promise.all(notes.list.map(note => createPortfolioFromNote(note)))
}

export async function getPortfolio(
  handleOrCharacterId: HandleOrCharacterId,
  noteId: string,
): Promise<Portfolio | null> {
  const characterId = await getCharacterId(handleOrCharacterId)
  const note = await indexer.note.get(characterId, noteId)
  return note ? createPortfolioFromNote(note) : null
}

async function createPortfolioFromNote(note: NoteEntity): Promise<Portfolio> {
  const portfolio: Portfolio = {
    noteId: note.noteId,
    title: note.metadata?.content?.title ?? '',
    link: note.metadata?.content?.external_urls?.at(0) ?? '',
    date: note.metadata?.content?.date_published ?? '',
    // @ts-expect-error TODO: summary is not in the type
    summary: note.metadata?.content?.summary as string | undefined ?? '',
    cover: convertIpfsUrl(note.metadata?.content?.attachments?.find(att => att.name === 'cover')?.address) ?? '',
  }

  // check if the link is a GitHub link
  if (
    portfolio.link.startsWith('https://github.com')
    && portfolio.link.split('/').length === 5
  ) {
    const res = await fetch(portfolio.link.replace('https://github.com/', 'https://ungh.cc/repos/'))
    const { repo } = await res.json() as UnghResponse
    portfolio.title = repo.name
    portfolio.summary = repo.description
    portfolio.likes = repo.stars
  }

  return portfolio
}
