import { graphql } from '../gql'
import type { ClientBase } from './context'
import type { HandleOrCharacterId, SiteInfo } from './types'
import { getFullXLogMeta, parseConnectedAccount, toGateway } from './utils'

const linkListCountQuery = graphql(`
  query getLinklistCount($characterId: Int!) {
    linkCount(
      where: {
        linkType: { equals: "like" }
        toCharacterId: { equals: $characterId }
      }
    )
  }
`)

export class SiteClient {
  constructor(private base: ClientBase) {}

  async getInfo(handleOrCharacterId: HandleOrCharacterId): Promise<SiteInfo> {
    const { indexer, xLogBase } = this.base.context
    const character
      = typeof handleOrCharacterId === 'string'
        ? await indexer.character.getByHandle(handleOrCharacterId)
        : await indexer.character.get(handleOrCharacterId)

    if (!character)
      throw new Error('Character not found')

    const content = character.metadata?.content
    if (!content)
      throw new Error('Character content not found')

    const {
      attributes,
      connected_accounts: connectedAccounts = [],
      name: characterName,
      avatars,
      banners,
      bio,
    } = content
    const {
      navigation,
      custom_domain: customDomain,
      site_name: siteName,
      footer,
      ga,
      ua,
      uh,
      css,
    } = getFullXLogMeta(attributes)

    const { handle } = character
    const xlogUrl = customDomain
      ? `https://${customDomain}`
      : `https://${handle}.${xLogBase}`

    return {
      handle,
      characterId: character.characterId,
      xlogUrl,

      icon: avatars?.map(avatar => toGateway(avatar)).at(0),
      banner: banners?.map(banner => toGateway(banner.address)).at(0),
      characterName,
      siteName: siteName || characterName,
      description: bio,
      footer,
      analytics: {
        google: ga,
        umamiCloud: {
          url: uh,
          id: ua,
        },
      },
      socialPlatforms: connectedAccounts.map(account =>
        parseConnectedAccount(account),
      ),
      navigation,
      customDomain,
      customCSS: css,
    }
  }

  async getStat(handleOrCharacterId: HandleOrCharacterId) {
    const { indexer, client } = this.base.context
    const characterId = await this.base.getCharacterId(handleOrCharacterId)
    const [stat, site, subscriptions, comments, notes, likes, achievement]
      = await Promise.all([
        indexer.stat.getForCharacter(characterId),
        indexer.character.get(characterId),
        indexer.link.getBacklinksOfCharacter(characterId, {
          limit: 0,
          linkType: 'follow',
        }),
        indexer.note.getMany({
          limit: 0,
          toCharacterId: characterId,
        }),
        indexer.note.getMany({
          characterId,
          sources: 'xlog',
          limit: 0,
        }),
        client.query(linkListCountQuery, { characterId }).toPromise(),
        indexer.achievement.getMany(characterId, {
          status: ['MINTED'],
        }),
      ])

    return {
      viewsCount: stat.viewNoteCount,
      createdAt: site?.createdAt,
      createTx: site?.transactionHash,
      subscriptionCount: subscriptions.count,
      commentsCount: comments.count,
      notesCount: notes.count,
      likesCount: likes.data?.linkCount,
      achievements: achievement?.list.reduce((acc, cur) => {
        return acc + cur.groups.length
      }, 0),
    }
  }
}
