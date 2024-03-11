import type { Interaction } from '.'

export type Post = {
  noteId: number
  title: string
  slug: string
  date: string
  tags: string[]
  summary: string
  cover: string
  content: string
} & Interaction
