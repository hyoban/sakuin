import { expect, test } from 'vitest'

import { Client } from '../'
import { parseConnectedAccount } from '.'

const client = new Client()

test('get character id', async () => {
  expect(await client.getCharacterId('diygod')).toBe(10)
  expect(await client.getCharacterId(10)).toBe(10)
  await expect(() =>
    client.getCharacterId('thisCharacterDoesNotExist'),
  ).rejects.toThrowErrorMatchingInlineSnapshot('[Error: Character not found]')

  await expect(() => client.getCharacterId('$')).rejects
    .toThrowErrorMatchingInlineSnapshot(`
    [Error: Request failed, status code: 400
    Response:
    {"message":["handle must be a handle"],"error":"Bad Request","statusCode":400}]
  `)
})

test('parse connected account', () => {
  const connectedAccounts = [
    'csb://account:DIYgod@github',
    'csb://account:DIYgod@twitter',
    'csb://account:2267573@bilibili',
    'csb://account:prpr233@telegram',
    'csb://account:i@diygod.me@email',
    'csb://account:diygod@steam',
    'csb://account:DIYgod_@playstation',
    'csb://account:SW-3404-1126-5044@nintendo switch',
  ] as const

  expect(connectedAccounts.map(element => parseConnectedAccount(element)))
    .toMatchInlineSnapshot(`
      [
        {
          "id": "DIYgod",
          "platform": "github",
        },
        {
          "id": "DIYgod",
          "platform": "twitter",
        },
        {
          "id": "2267573",
          "platform": "bilibili",
        },
        {
          "id": "prpr233",
          "platform": "telegram",
        },
        {
          "id": "i@diygod.me",
          "platform": "email",
        },
        {
          "id": "diygod",
          "platform": "steam",
        },
        {
          "id": "DIYgod_",
          "platform": "playstation",
        },
        {
          "id": "SW-3404-1126-5044",
          "platform": "nintendo switch",
        },
      ]
    `)
})
