import { expect, test } from 'vitest'

import { getPostList } from '.'

test('getPostList', async () => {
  const postList = await getPostList('diygod', { orderBy: 'publishedAt', limit: 2 })
  expect(postList).toHaveLength(2)
  expect(postList[0]).toHaveProperty('noteId')
  expect(postList[0]).toHaveProperty('views')
  expect(postList[0]).toHaveProperty('likes')
  expect(postList[0]).toHaveProperty('comments')
})
