import type { CrossbellAPIResponse, UnghResponse } from './types'

export async function getLatestBlogList() {
  return await fetch('https://indexer.crossbell.io/v1/notes?characterId=51657&tags=post&limit=3')
    .then(res => res.json() as Promise<CrossbellAPIResponse>)
    .then(res => res.list.map(blog => ({
      title: blog.metadata.content.title,
      link: `https://hyoban.xlog.app/${blog.metadata.content.attributes.find(attr => attr.trait_type === 'xlog_slug')?.value as string}`,
      date: blog.metadata.content.date_published,
    })))
}

const projects = [
  'tailwindcss-classname-highlight',
  'izon',
  'unocss-preset-shadcn',
]

export async function getGitHubProjects() {
  return await Promise.all(projects.map(async (project) => {
    const res = await fetch(`https://ungh.cc/repos/hyoban/${project}`)
    const response = await res.json() as UnghResponse
    return response.repo
  }))
}
