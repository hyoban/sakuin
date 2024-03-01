import { getCharacter } from './character'
import { indexer } from './indexer'

export async function getPodcasts(handle: string) {
  const { characterId } = await getCharacter(handle)

  return await indexer.note.getMany({ characterId, tags: 'portfolio', orderBy: 'publishedAt' })
    .then(res => res.list
      .filter(note => note.metadata?.content?.external_urls?.some(url => url.startsWith('https://www.xiaoyuzhoufm.com')))
      .map(note => ({
        title: note.metadata?.content?.title,
        link: note.metadata?.content?.external_urls?.at(0),
        date: note.metadata?.content?.date_published,
      })),
    )
}