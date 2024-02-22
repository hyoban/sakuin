import type { CrossbellAPIResponse } from './types'

export async function getLatestBlogList() {
  return await fetch('https://indexer.crossbell.io/v1/notes?characterId=51657&tags=post&limit=3')
    .then(res => res.json() as Promise<CrossbellAPIResponse>)
    .then(res => res.list.map(blog => ({
      title: blog.metadata.content.title,
      link: `https://hyoban.xlog.app/${blog.metadata.content.attributes.find(attr => attr.trait_type === 'xlog_slug')?.value as string}`,
      date: blog.metadata.content.date_published,
    })))
}
