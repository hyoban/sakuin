import type { InteractionCount, NoteBasic } from ".";

export interface CommentInput {
  targetCharacterId: number;
  targetNoteId: number;
  content: string;
  name: string;
  email: string;
  url: string;
}

export type Comment = CommentInput &
  InteractionCount &
  NoteBasic & { replies: Comment[] };
