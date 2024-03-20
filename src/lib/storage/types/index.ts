import type { createIndexer, Indexer, NoteEntity } from 'crossbell'

type IndexerOptions = Omit<Exclude<Parameters<typeof createIndexer>[0], undefined | string>, 'experimentalRequestDedupe'>
/**
 * Options for customizing the client behavior.
 * This extends the options for the indexer and adds a few more.
 */
export type ClientOptions = IndexerOptions & {
  /**
   * The base URL for the xLog related API.
   * @default 'xlog.app'
   */
  xLogBase?: 'xlog.app' | 'xlog.page',
}

/**
 * This can be a handle or a character ID.
 * string for handle, number for character ID.
 */
export type HandleOrCharacterId = string | number

/**
 * The interaction count for a note.
 */
export type InteractionCount = {
  views: number,
  likes: number,
  comments: number,
  tips: number,
}

export type NoteQueryOptions = Parameters<Indexer['note']['getMany']>[0]
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
export * from './short'
export * from './site'
