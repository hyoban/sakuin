import type { NoteEntity, Numberish } from 'crossbell'

import { graphql } from '../../gql'
import { ClientContext, useContext } from './context'
import type { HandleOrCharacterId, NoteQueryOptions, Post, ResultMany } from './types'
import { getCharacterId, getNoteInteractionCount, getXLogMeta, toGateway } from './utils'

export async function getPostFull(
  handleOrCharacterId: HandleOrCharacterId,
  options?: Omit<NoteQueryOptions, 'cursor' | 'limit'>,
): Promise<Post[]> {
  const result: Post[] = []

  let currentCursor: string | null = null
  const { list, count, cursor } = await getPostMany(handleOrCharacterId, options)
  result.push(...list)
  currentCursor = cursor

  while (result.length < count && currentCursor) {
    const { list, cursor: nextCursor } = await getPostMany(handleOrCharacterId, { ...options, cursor: currentCursor })
    result.push(...list)
    currentCursor = nextCursor
  }

  return result
}

export async function getPostMany(
  handleOrCharacterId: HandleOrCharacterId,
  options?: NoteQueryOptions,
): Promise<ResultMany<Post>> {
  const characterId = await getCharacterId(handleOrCharacterId)
  const { indexer } = useContext(ClientContext)

  const notes = await indexer.note.getMany({
    characterId,
    tags: 'post',
    sources: 'xlog',
    ...options,
  })

  const list = await Promise.all(notes.list.map(note => createPostFromNote(note, characterId)))

  return {
    list,
    count: notes.count,
    cursor: notes.cursor,
  }
}

export async function getPost(
  handleOrCharacterId: HandleOrCharacterId,
  noteId: Numberish,
): Promise<Post | null> {
  const characterId = await getCharacterId(handleOrCharacterId)
  const { indexer } = useContext(ClientContext)

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
  const { client } = useContext(ClientContext)

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
  const interaction = await getNoteInteractionCount(characterId, noteId)

  return {
    ...note,
    title: note.metadata?.content?.title ?? '',
    slug: getXLogMeta(note.metadata?.content?.attributes, 'slug') ?? '',
    date: note.metadata?.content?.date_published ?? '',
    tags: note.metadata?.content?.tags?.filter((tag: string) => tag !== 'post') ?? [],
    // @ts-expect-error FIXME: https://github.com/Crossbell-Box/crossbell.js/issues/83#issuecomment-1987235215
    summary: note.metadata?.content?.summary as string | undefined ?? '',
    cover: toGateway(note.metadata?.content?.attachments?.find(att => att.name === 'cover')?.address) ?? '',
    content: toGateway(note.metadata?.content?.content) ?? '',
    ...interaction,
  }
}
