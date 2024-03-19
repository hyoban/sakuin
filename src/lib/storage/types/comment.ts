import type { InteractionCount, NoteBasic } from '.'

export type CommentInput = {
  targetCharacterId: number,
  targetNoteId: number,
  content: string,
  name: string,
  email: string,
  url: string,
}

export type Comment = CommentInput & InteractionCount & NoteBasic & { replies: Comment[] }
