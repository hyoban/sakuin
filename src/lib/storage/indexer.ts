import { cacheExchange, Client, fetchExchange } from '@urql/core'
import { createContract, createIndexer } from 'crossbell'

export const indexer = createIndexer()

export const client = new Client({
  url: 'https://indexer.crossbell.io/v1/graphql',
  exchanges: [cacheExchange, fetchExchange],
})

export const contract = createContract()
