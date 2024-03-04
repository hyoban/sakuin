import { indexer } from './indexer'
import { getSiteInfo } from './site'

export async function getLatestPostFromXLog(handle: string) {
  const { characterId, blogUrl } = await getSiteInfo(handle)
  if (!characterId)
    return []

  const notes = await indexer.note.getMany({
    characterId,
    tags: 'post',
    sources: 'xlog',
    orderBy: 'publishedAt',
    limit: 5,
  })

  const posts = notes.list.map(blog => ({
    noteId: blog.noteId,
    title: blog.metadata?.content?.title,
    link: `${blogUrl}/${blog.metadata?.content?.attributes?.find(attr => attr.trait_type === 'xlog_slug')?.value as string}`,
    date: blog.metadata?.content?.date_published,
  }))

  return Promise.all(posts.map(async (post) => {
    const views = await indexer.stat.getForNote(characterId, post.noteId)
    return { ...post, views: views.viewDetailCount }
  }))
}
