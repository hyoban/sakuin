import { indexer } from './indexer'
import { getSiteInfo } from './site'

export async function getPodcasts(handle: string) {
  const { characterId } = await getSiteInfo(handle)

  const notes = await indexer.note.getMany({ characterId, tags: 'portfolio', orderBy: 'publishedAt' })
  return notes.list
    .filter(note => note.metadata?.content?.external_urls?.some(url => url.startsWith('https://www.xiaoyuzhoufm.com')))
    .map(note => ({
      title: note.metadata?.content?.title,
      link: note.metadata?.content?.external_urls?.at(0),
      date: note.metadata?.content?.date_published,
    }))
}
