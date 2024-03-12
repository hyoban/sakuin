import type { InteractionCount, NoteBasic } from '.'

export type Comment = {
  characterId: number
  noteId: number
  content: string
  replies: Comment[]
  sender: {
    name: string
    email: string
    url: string
  }
} & InteractionCount & NoteBasic
