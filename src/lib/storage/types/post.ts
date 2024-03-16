import type { InteractionCount, NoteBasic } from '.'

export type PostInput = {
  title: string,
  content: string,
  datePublishedAt: string,
  summary: string,
  tags: string[],
  slug: string,
  disableAISummary: boolean,
  cover?: {
    address?: string,
    mimeType?: string,
  },
}

export type Post = PostInput & InteractionCount & NoteBasic
