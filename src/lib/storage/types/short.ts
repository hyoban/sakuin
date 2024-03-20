import type { NoteMetadataAttachmentBase } from 'crossbell'

import type { InteractionCount, NoteBasic } from '.'

export type ShortInput = {
  content: string,
  datePublishedAt: string,
  slug: string,
} & {
  attachments?: Array<NoteMetadataAttachmentBase<'address'>>,
}

export type Short = ShortInput & InteractionCount & NoteBasic
