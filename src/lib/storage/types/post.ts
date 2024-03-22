import type { Language } from '../'
import type { InteractionCount, NoteBasic } from '.'

export type PostInput = {
  title: string,
  content: string,
  datePublishedAt: string,
  summary: string,
  tags: string[],
  slug: string,
  disableAISummary: boolean,
  cover: string,
}

export type Post = PostInput & { lang: Language } & InteractionCount & NoteBasic
