import { indexer } from './indexer'
import type { SiteInfo } from './types'
import { convertIpfsUrl, getFullXLogMeta, parseConnectedAccount } from './utils'

export async function getSiteInfo(handle: string): Promise<SiteInfo> {
  const character = await indexer.character.getByHandle(handle)
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

  const blogLink = customDomain ? `https://${customDomain}` : `https://${handle}.xlog.app`

  return {
    handle,
    characterId: character.characterId,
    blogLink,

    icon: avatars?.map(avatar => convertIpfsUrl(avatar)).at(0),
    banner: banners?.map(banner => convertIpfsUrl(banner.address)).at(0),
    characterName,
    siteName,
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
