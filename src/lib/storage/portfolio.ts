import type { NoteEntity } from 'crossbell'

import type { ClientBase } from './context'
import type { HandleOrCharacterId, Portfolio, PortfolioStats } from './types'
import type { NoteQueryOptions, ResultMany } from './types/utils'
import { toGateway } from './utils'

export class PortfolioClient {
  constructor(private base: ClientBase) {}

  async getAll(
    handleOrCharacterId: HandleOrCharacterId,
    options?: Omit<NoteQueryOptions, 'cursor' | 'limit'>,
  ): Promise<Portfolio[]> {
    const result: Portfolio[] = []

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
  ): Promise<ResultMany<Portfolio>> {
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const { indexer } = this.base.context

    const notes = await indexer.note.getMany({
      characterId,
      tags: 'portfolio',
      sources: 'xlog',
      orderBy: options?.orderBy ?? 'publishedAt',
      ...options,
    })

    const list = await Promise.all(notes.list.map(note => this.createPortfolioFromNote(note)))

    return {
      list,
      count: notes.count,
      cursor: notes.cursor,
    }
  }

  async get(
    handleOrCharacterId: HandleOrCharacterId,
    noteId: string,
  ): Promise<Portfolio> {
    const { indexer } = this.base.context
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const note = await indexer.note.get(characterId, noteId)
    if (!note)
      throw new Error(`Note not found: ${noteId}`)
    return this.createPortfolioFromNote(note)
  }

  private async createPortfolioFromNote(note: NoteEntity): Promise<Portfolio> {
    const { xLogBase } = this.base.context

    let portfolio: Portfolio = {
      noteId: note.noteId,
      title: note.metadata?.content?.title ?? '',
      link: note.metadata?.content?.external_urls?.at(0) ?? '',
      date: note.metadata?.content?.date_published ?? '',
      // @ts-expect-error TODO: summary is not in the type
      summary: note.metadata?.content?.summary as string | undefined ?? '',
      cover: toGateway(note.metadata?.content?.attachments?.find(att => att.name === 'cover')?.address) ?? '',
    }

    const res = await fetch(`https://${xLogBase}/api/portfolio-stats?url=${portfolio.link}`)
    const stats = await res.json() as PortfolioStats
    portfolio = { ...portfolio, ...stats }

    return portfolio
  }
}
