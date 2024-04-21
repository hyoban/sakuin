import type { NoteMetadataAttachmentBase } from "crossbell";

import type { Language } from "../";
import type { InteractionCount, NoteBasic } from ".";

export type ShortInput = {
  title: string,
  content: string,
  datePublishedAt: string,
  slug: string,
} & {
  attachments?: Array<NoteMetadataAttachmentBase<"address">>,
};

export type Short = ShortInput & { lang?: Language } & InteractionCount &
  NoteBasic;
