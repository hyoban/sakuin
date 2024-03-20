import type { Indexer } from 'crossbell'

export type NoteQueryOptions = Parameters<Indexer['note']['getMany']>[0]

export type ResultMany<T> = {
  list: T[],
  count: number,
  cursor: string | null,
}
