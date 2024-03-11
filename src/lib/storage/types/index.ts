import type { indexer } from '../indexer'

export type NoteQueryOptions = Parameters<typeof indexer.note.getMany>[0]
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
export type TimeInfo = {
  createdAt: string
  publishedAt: string
  updatedAt: string
  deletedAt: string | null
}

export * from './comment'
export * from './portfolio'
export * from './post'
export * from './site'
