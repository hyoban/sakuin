import type { Loader } from 'astro/loaders'
import { z } from 'astro/zod'

import type { ClientOptions } from '../index'
import { Client } from '../index'

export function shortsLoader(
  {
    handle,
    ...options
  }: ClientOptions & {
    handle: string
  },
): Loader {
  const client = new Client(options)

  return {
    name: 'xlog-shorts-loader',
    async load({ store }) {
      // 所有图文排序
      const shorts = (await client.short.getAll(handle))
        .sort((a, b) => {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        })
      for (const short of shorts) {
        const html = short.content

        store.set({
          id: short.slug,
          data: {
            slug: short.slug,
            link: short.slug,
            title: short.title,
            date: new Date(short.publishedAt),
            pubDate: new Date(short.publishedAt),
            content: html,
            // 添加新字段
            characterId: short.characterId,
            noteId: short.noteId,
            deletedAt: short.deletedAt ? new Date(short.deletedAt) : null,
            uri: short.uri,
            // 互动数据
            views: short.views,
            likes: short.likes,
            comments: short.comments,
            tips: short.tips,
            attachments: short.attachments || [],
            // 语言
            lang: short.lang,
          },
          body: short.content,
          rendered: { html },
        })
      }
      return // 返回 void
    },
    schema: () => {
      return z.object({
        slug: z.string(),
        link: z.string(),
        title: z.string(),
        date: z.coerce.date(),
        pubDate: z.coerce.date(),
        content: z.string(),
        // 添加新字段的 schema
        characterId: z.number(),
        noteId: z.number(),
        uri: z.string(),
        views: z.number(),
        likes: z.number(),
        comments: z.number(),
        tips: z.number(),
        attachments: z.array(z.any()),
        lang: z.string().optional(),
      })
    },
  }
}
