import type { NoteEntity } from 'crossbell'

import { graphql } from '../../gql'
import { client, indexer } from './indexer'
import type { HandleOrCharacterId, NoteQueryOptions, Post } from './types'
import { convertIpfsUrl, getCharacterId, getXLogMeta } from './utils'

export async function getPostMany(
  handleOrCharacterId: HandleOrCharacterId,
  options?: NoteQueryOptions,
): Promise<Post[]> {
  const characterId = await getCharacterId(handleOrCharacterId)

  const notes = await indexer.note.getMany({
    characterId,
    tags: 'post',
    sources: 'xlog',
    ...options,
  })

  return Promise.all(notes.list.map(note => createPostFromNote(note, characterId)))
}

export async function getPost(
  handleOrCharacterId: HandleOrCharacterId,
  noteId: string,
): Promise<Post | null> {
  const characterId = await getCharacterId(handleOrCharacterId)

  const note = await indexer.note.get(characterId, noteId)
  if (!note)
    return null

  return createPostFromNote(note, characterId)
}

const noteQuery = graphql(`
query getNotes($characterId: Int!, $slug: JSON!) {
  notes(
    where: {
      characterId: { equals: $characterId }
      deleted: { equals: false }
      metadata: {
        content: { path: ["sources"], array_contains: ["xlog"] }
        OR: [
          {
            content: {
              path: ["attributes"]
              array_contains: [{ trait_type: "xlog_slug", value: $slug }]
            }
          }
          { content: { path: ["title"], equals: $slug } }
        ]
      }
    }
    orderBy: [{ createdAt: desc }]
    take: 1
  ) {
    characterId
    noteId
    metadata {
      uri
      content
    }
    owner
    createdAt
    updatedAt
    publishedAt
    transactionHash
    blockNumber
    updatedTransactionHash
    updatedBlockNumber
  }
}
`)

export async function getPostBySlug(
  handleOrCharacterId: HandleOrCharacterId,
  slug: string,
): Promise<Post | null> {
  const characterId = await getCharacterId(handleOrCharacterId)

  const note = await client.query(noteQuery, { characterId, slug })
  const post = note.data?.notes.at(0)
  if (!post)
    return null
  return createPostFromNote(post as NoteEntity, characterId)
}

async function createPostFromNote(
  note: NoteEntity,
  characterId: number,
): Promise<Post> {
  const { noteId } = note
  const [
    views,
    likes,
    comments,
  ] = await Promise.all([
    indexer.stat.getForNote(characterId, noteId),
    indexer.link.getBacklinksByNote(characterId, noteId, { linkType: 'like' }),
    indexer.note.getMany({ toCharacterId: characterId, toNoteId: noteId }),
  ])

  return {
    noteId: note.noteId,
    title: note.metadata?.content?.title ?? '',
    slug: getXLogMeta(note.metadata?.content?.attributes, 'slug') ?? '',
    date: note.metadata?.content?.date_published ?? '',
    tags: note.metadata?.content?.tags?.filter((tag: string) => tag !== 'post') ?? [],
    // @ts-expect-error FIXME: https://github.com/Crossbell-Box/crossbell.js/issues/83#issuecomment-1987235215
    summary: note.metadata?.content?.summary as string | undefined ?? '',
    cover: convertIpfsUrl(note.metadata?.content?.attachments?.find(att => att.name === 'cover')?.address) ?? '',
    content: convertIpfsUrl(note.metadata?.content?.content) ?? '',
    views: views.viewDetailCount,
    likes: likes.count,
    comments: comments.count,
  }
}
