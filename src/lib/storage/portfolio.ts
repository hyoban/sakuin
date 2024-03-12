import type { NoteEntity } from 'crossbell'

import { ClientContext, useContext } from './context'
import type { HandleOrCharacterId, NoteQueryOptions, Portfolio, PortfolioStats, ResultMany } from './types'
import { getCharacterId, toGateway } from './utils'

export async function getPortfolioFull(
  handleOrCharacterId: HandleOrCharacterId,
  options?: Omit<NoteQueryOptions, 'cursor' | 'limit'>,
): Promise<Portfolio[]> {
  const result: Portfolio[] = []

  let currentCursor: string | null = null
  const { list, count, cursor } = await getPortfolioMany(handleOrCharacterId, options)
  result.push(...list)
  currentCursor = cursor

  while (result.length < count && currentCursor) {
    const { list, cursor: nextCursor } = await getPortfolioMany(handleOrCharacterId, { ...options, cursor: currentCursor })
    result.push(...list)
    currentCursor = nextCursor
  }

  return result
}

export async function getPortfolioMany(
  handleOrCharacterId: HandleOrCharacterId,
  options?: NoteQueryOptions,
): Promise<ResultMany<Portfolio>> {
  const characterId = await getCharacterId(handleOrCharacterId)
  const { indexer } = useContext(ClientContext)

  const notes = await indexer.note.getMany({
    ...options,
    characterId,
    tags: 'portfolio',
    sources: 'xlog',
  })

  const list = await Promise.all(notes.list.map(note => createPortfolioFromNote(note)))

  return {
    list,
    count: notes.count,
    cursor: notes.cursor,
  }
}

export async function getPortfolio(
  handleOrCharacterId: HandleOrCharacterId,
  noteId: string,
): Promise<Portfolio> {
  const { indexer } = useContext(ClientContext)
  const characterId = await getCharacterId(handleOrCharacterId)
  const note = await indexer.note.get(characterId, noteId)
  if (!note)
    throw new Error(`Note not found: ${noteId}`)
  return createPortfolioFromNote(note)
}

async function createPortfolioFromNote(note: NoteEntity): Promise<Portfolio> {
  let portfolio: Portfolio = {
    noteId: note.noteId,
    title: note.metadata?.content?.title ?? '',
    link: note.metadata?.content?.external_urls?.at(0) ?? '',
    date: note.metadata?.content?.date_published ?? '',
    // @ts-expect-error TODO: summary is not in the type
    summary: note.metadata?.content?.summary as string | undefined ?? '',
    cover: toGateway(note.metadata?.content?.attachments?.find(att => att.name === 'cover')?.address) ?? '',
  }

  const res = await fetch(`https://xlog.app/api/portfolio-stats?url=${portfolio.link}`)
  const stats = await res.json() as PortfolioStats
  portfolio = { ...portfolio, ...stats }

  return portfolio
}
