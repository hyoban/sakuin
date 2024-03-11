import type { InteractionCount } from '.'

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
} & InteractionCount
