import { ofetch } from 'ofetch'

import type { Stat } from '../../types/stat'
import { getCharacter } from './character'
import { indexer } from './indexer'

const indexerFetch = ofetch.create({ baseURL: 'https://indexer.crossbell.io/v1' })

async function getViewDetailCount(
  characterId: number,
  noteId: number,
) {
  return indexerFetch<Stat>(`/stat/notes/${characterId}/${noteId}`)
    .then(stat => stat.viewDetailCount)
}

export async function getLatestPostFromXLog(handle: string) {
  const { characterId, blogUrl } = await getCharacter(handle)
  if (!characterId)
    return []

  return indexer.note.getMany({
    characterId,
    tags: 'post',
    sources: 'xlog',
    orderBy: 'publishedAt',
    limit: 5,
  })
    .then(res => res.list.map(blog => ({
      noteId: blog.noteId,
      title: blog.metadata?.content?.title,
      link: `${blogUrl}/${blog.metadata?.content?.attributes?.find(attr => attr.trait_type === 'xlog_slug')?.value as string}`,
      date: blog.metadata?.content?.date_published,
    })))
    .then(blogs => (
      Promise.all(blogs.map(async (blog) => {
        const views = await getViewDetailCount(characterId, blog.noteId)
        return { ...blog, views }
      }))
    ))
}
