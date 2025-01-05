import { createMarkdownProcessor } from '@astrojs/markdown-remark'
import type { Loader } from 'astro/loaders'
import { z } from 'astro/zod'

import type { ClientOptions } from '../index'
import { Client } from '../index'

export function postLoader(
  {
    handle,
    ...options
  }: ClientOptions & {
    handle: string
  },
): Loader {
  const client = new Client(options)

  return {
    name: 'xlog-post-loader',
    async load({ config, store }) {
      const markdownProcessor = await createMarkdownProcessor(config.markdown)
      const posts = (await client.post.getAll(handle))
        .sort((a, b) => {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        })

      for (const post of posts) {
        const { code: html } = await markdownProcessor.render(post.content)

        store.set({
          id: post.slug,
          data: {
            slug: post.slug,
            link: post.slug,
            title: post.title,
            description: post.summary,
            summary: post.summary,
            tags: post.tags,
            categories: post.tags,
            cover: post.cover,
            date: new Date(post.publishedAt),
            pubDate: new Date(post.publishedAt),
            content: html,
          },
          body: post.content,
          rendered: { html },
        })
      }
    },
    schema: () => {
      return z.object({
        slug: z.string(),
        link: z.string(),
        title: z.string(),
        description: z.string(),
        summary: z.string(),
        tags: z.array(z.string()),
        categories: z.array(z.string()),
        cover: z.string(),
        date: z.coerce.date(),
        pubDate: z.coerce.date(),
        content: z.string(),
      })
    },
  }
}
