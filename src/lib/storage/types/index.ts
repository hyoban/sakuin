import type { indexer } from '../indexer'

export type NoteQueryOptions = Parameters<typeof indexer.note.getMany>[0]
export type HandleOrCharacterId = string | number

export * from './portfolio'
export * from './post'
export * from './site'
