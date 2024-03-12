import type { Indexer, NoteEntity } from 'crossbell'

export type NoteQueryOptions = Parameters<Indexer['note']['getMany']>[0]
export type HandleOrCharacterId = string | number
export type InteractionCount = {
  views: number
  likes: number
  comments: number
  tips: number
}
export type ResultMany<T> = {
  list: T[]
  count: number
  cursor: string | null
}

export type NoteBasic = Pick<NoteEntity, 'noteId' | 'characterId' | 'uri' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'deletedAt'>

export * from './comment'
export * from './portfolio'
export * from './post'
export * from './site'
