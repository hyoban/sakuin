// credit: https://blog.skk.moe/post/context-in-javascript/

import { cacheExchange, Client, fetchExchange } from '@urql/core'
import type { Contract, Indexer } from 'crossbell'
import { createContract, createIndexer } from 'crossbell'

import type { HandleOrCharacterId, IndexerOptions, InteractionCount } from './types'

type XLogOptions = Omit<IndexerOptions, 'experimentalRequestDedupe'> & { xLogBase?: 'xlog.app' | 'xlog.page' }
type ClientContext = {
  client: Client,
  indexer: Indexer,
  contract: Contract,
  xLogBase: string,
}

export class ClientBase {
  context: ClientContext

  constructor(options?: XLogOptions) {
    const {
      endpoint = 'https://indexer.crossbell.io/v1',
      xLogBase = 'xlog.app',
    } = options ?? {}

    this.context = {
      client: new Client({
        url: `${endpoint}/graphql`,
        exchanges: [cacheExchange, fetchExchange],
      }),
      indexer: createIndexer({
        endpoint,
        fetchOptions: options?.fetchOptions,
        experimentalRequestDedupe: false,
      }),
      contract: createContract(),
      xLogBase,
    }
  }

  async getCharacterId(handleOrCharacterId: HandleOrCharacterId) {
    if (typeof handleOrCharacterId === 'number')
      return handleOrCharacterId

    const { indexer } = this.context

    const character = await indexer.character.getByHandle(handleOrCharacterId)
    if (!character)
      throw new Error('Character not found')
    return character.characterId
  }

  async getNoteInteractionCount(
    characterId: number,
    noteId: number,
  ): Promise<InteractionCount> {
    const { indexer } = this.context

    const [
      views,
      likes,
      comments,
      tips,
    ] = await Promise.all([
      indexer.stat.getForNote(characterId, noteId),
      indexer.link.getBacklinksByNote(characterId, noteId, { linkType: 'like' }),
      indexer.note.getMany({ toCharacterId: characterId, toNoteId: noteId }),
      await indexer.tip.getMany({
        toNoteId: noteId,
        toCharacterId: characterId,
      }),
    ])

    if (tips.list.length > 0) {
      const decimals = await this.getMiraTokenDecimals()
      tips.list = tips.list.filter((t) => {
        return (
          BigInt(t.amount)
          >= BigInt(1) * BigInt(10) ** BigInt(decimals.data || 18)
        )
      })
      tips.list = tips.list.map((t) => {
        return {
          ...t,
          amount: (
            BigInt(t.amount)
            / BigInt(10) ** BigInt(decimals.data || 18)
          ).toString(),
        }
      })
    }

    return {
      views: views.viewDetailCount,
      likes: likes.count,
      comments: comments.count,
      tips: tips.list.reduce((acc, tip) => acc + Number(tip.amount), 0),
    }
  }

  private async getMiraTokenDecimals() {
    const { contract } = this.context
    let decimals
    try {
      decimals = await contract.tips.getTokenDecimals()
    }
    catch {
      decimals = {
        data: 18,
      }
    }
    return decimals
  }
}
