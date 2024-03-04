import { expect, test } from 'vitest'

import { getPortfolioMany } from './portfolio'

test('get portfolios', async () => {
  const portfolios = await getPortfolioMany('diygod', { orderBy: 'publishedAt', limit: 2 })
  expect(portfolios).toHaveLength(2)
  for (const key of [
    'noteId',
    'title',
    'link',
    'date',
    'summary',
    'cover',
  ])
    expect(portfolios[0]).toHaveProperty(key)
})
