import type { ClientBase } from './context'
import type { HandleOrCharacterId, SiteInfo } from './types'
import { getFullXLogMeta, parseConnectedAccount, toGateway } from './utils'

export class SiteClient {
  constructor(private base: ClientBase) {}

  async getInfo(handleOrCharacterId: HandleOrCharacterId): Promise<SiteInfo> {
    const { indexer, xLogBase } = this.base.context
    const character = typeof handleOrCharacterId === 'string'
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
    const xlogUrl = customDomain ? `https://${customDomain}` : `https://${handle}.${xLogBase}`

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
      socialPlatforms: connectedAccounts.map(account => parseConnectedAccount(account)),
      navigation,
      customDomain,
      customCSS: css,
    }
  }
}
