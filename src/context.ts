// credit: https://blog.skk.moe/post/context-in-javascript/

import { cacheExchange, Client, fetchExchange } from '@urql/core'
import type { Contract, Indexer } from 'crossbell'
import { createContract, createIndexer } from 'crossbell'
import { ipfsUploadFile } from 'crossbell/ipfs'

import type {
  ClientOptions,
  HandleOrCharacterId,
  InteractionCount,
} from './types'

interface ClientContext {
  client: Client,
  indexer: Indexer,
  contract: Contract,
  xLogBase: string,
}

export class ClientBase {
  /**
   * @ignore
   */
  context: ClientContext

  constructor(options?: ClientOptions) {
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

  /**
   * Get the character ID from a handle or character ID.
   * If the input is a number, it will be treated as a character ID and returned directly.
   * Otherwise, it will be treated as a handle and the character ID will be looked up.
   */
  async getCharacterId(handleOrCharacterId: HandleOrCharacterId) {
    if (typeof handleOrCharacterId === 'number')
      return handleOrCharacterId

    const { indexer } = this.context

    const character = await indexer.character.getByHandle(handleOrCharacterId)
    if (!character)
      throw new Error('Character not found')
    return character.characterId
  }

  /**
   * Get the interaction count for a note.
   * This includes views, likes, comments, and tips.
   */
  async getNoteInteractionCount(
    characterId: number,
    noteId: number,
  ): Promise<InteractionCount> {
    const { indexer } = this.context

    const [views, likes, comments, tips] = await Promise.all([
      indexer.stat.getForNote(characterId, noteId),
      indexer.link.getBacklinksByNote(characterId, noteId, {
        linkType: 'like',
      }),
      indexer.note.getMany({ toCharacterId: characterId, toNoteId: noteId }),
      indexer.tip.getMany({
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

  /**
   * Upload files to IPFS.
   * @param urls remote file urls
   * @returns
   */
  async uploadFileFromUrl(urls: string[]) {
    return await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url)
        const file = new Blob([await response.blob()])
        return await ipfsUploadFile(file)
      }),
    )
  }

  /**
   * Upload a file to IPFS.
   * equivalent to `ipfsUploadFile` from `crossbell/ipfs`
   */
  uploadFile = ipfsUploadFile
}
