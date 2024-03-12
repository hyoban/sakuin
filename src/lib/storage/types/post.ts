import type { InteractionCount, NoteBasic } from '.'

export type Post = {
  noteId: number
  title: string
  slug: string
  date: string
  tags: string[]
  summary: string
  cover: string
  content: string
} & InteractionCount & NoteBasic
