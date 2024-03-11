import type { indexer } from '../indexer'

export type NoteQueryOptions = Parameters<typeof indexer.note.getMany>[0]
export type HandleOrCharacterId = string | number
export type Interaction = {
  views: number
  likes: number
  comments: number
}

export * from './comment'
export * from './portfolio'
export * from './post'
export * from './site'
