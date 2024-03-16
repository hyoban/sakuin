import type { createIndexer, Indexer, NoteEntity } from 'crossbell'

export type IndexerOptions = Exclude<Parameters<typeof createIndexer>[0], undefined | string>
export type NoteQueryOptions = Parameters<Indexer['note']['getMany']>[0]
export type HandleOrCharacterId = string | number
export type InteractionCount = {
  views: number,
  likes: number,
  comments: number,
  tips: number,
}
export type ResultMany<T> = {
  list: T[],
  count: number,
  cursor: string | null,
}

export type NoteType = 'post' | 'page' | 'portfolio' | 'short'
export type NoteBasic = Pick<NoteEntity, 'noteId' | 'characterId' | 'uri' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'deletedAt'>

export * from './comment'
export * from './portfolio'
export * from './post'
export * from './site'
