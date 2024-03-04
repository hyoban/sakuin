import { expect, test } from 'vitest'

import { getPostMany } from './post'

test('get post list', async () => {
  const postList = await getPostMany('diygod', { orderBy: 'publishedAt', limit: 2 })
  expect(postList).toHaveLength(2)
  for (const key of [
    'noteId',
    'title',
    'link',
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
