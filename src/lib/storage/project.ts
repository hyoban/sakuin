import { ofetch } from 'ofetch'

import type { UnghResponse } from '../../types/github'
import { indexer } from './indexer'
import { getSiteInfo } from './site'

async function getGitHubRepo(handle: string) {
  const { characterId } = await getSiteInfo(handle)
  const notes = await indexer.note.getMany({ characterId, tags: 'portfolio', orderBy: 'publishedAt' })

  return notes.list
    .map(note => note.metadata?.content?.external_urls?.filter(Boolean) ?? [])
    .filter(urls => urls.some(url => url.startsWith('https://github.com')))
    .map(urls => urls[0]?.replace('https://github.com/', ''))
}

export async function getGitHubProjects(handle: string) {
  const projects = await getGitHubRepo(handle)

  return Promise.all(
    projects.map(async (project) => {
      const res = await ofetch<UnghResponse>(`https://ungh.cc/repos/${project}`)
      return { ...res.repo, link: `https://github.com/${res.repo.repo}` }
    }),
  )
}
