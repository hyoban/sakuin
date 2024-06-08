import { expect, test } from 'vitest'

import { Client } from '.'

const client = new Client()

test('get post list', async () => {
  const { list: postList } = await client.post.getMany('diygod', { limit: 3 })
  expect(postList).toHaveLength(3)
  for (const key of [
    'noteId',
    'title',
    'slug',
    'datePublishedAt',
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
