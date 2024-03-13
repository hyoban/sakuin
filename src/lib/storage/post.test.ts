import { expect, test } from 'vitest'

import { Client } from '.'

const client = new Client()

test('get post list', async () => {
  const { list: postList } = await client.post.getPostMany('diygod', { orderBy: 'publishedAt', limit: 2 })
  expect(postList).toHaveLength(2)
  for (const key of [
    'noteId',
    'title',
    'slug',
    'date',
    'tags',
    'summary',
    'cover',
    'content',
    'views',
    'likes',
    'comments',
  ])
    expect(postList[0]).toHaveProperty(key)
  expect(postList[0]?.tags).toBeInstanceOf(Array)
})
