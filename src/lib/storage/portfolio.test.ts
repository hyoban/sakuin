import { expect, test } from 'vitest'

import { Client } from '.'

const client = new Client()

test('get portfolios', async () => {
  const { list: portfolios } = await client.portfolio.getMany('diygod', { limit: 2 })
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
