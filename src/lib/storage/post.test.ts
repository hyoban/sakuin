import { expect, test } from 'vitest'

import { getPostList } from '.'

test('getPostList', async () => {
  const postList = await getPostList('diygod', { orderBy: 'publishedAt', limit: 2 })
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
