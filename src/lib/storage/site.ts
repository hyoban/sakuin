import { indexer } from './indexer'
import type { SiteInfo } from './types'
import { convertIpfsUrl, getXLogMetaInAttributes as getXLogMeta, parseConnectedAccount } from './utils'

export async function getSiteInfo(handle: string): Promise<SiteInfo> {
  const character = await indexer.character.getByHandle(handle)
  if (!character)
    throw new Error('Character not found')

  const content = character.metadata?.content
  if (!content)
    throw new Error('Character content not found')

  const { attributes } = content
  const connectedAccounts = content.connected_accounts ?? []
  const navigationList = getXLogMeta(attributes, 'navigation')
  const xLogCustomDomain = getXLogMeta(attributes, 'custom_domain')
  const blogUrl = xLogCustomDomain ? `https://${xLogCustomDomain}` : `https://${handle}.xlog.app`
  const characterName = content.name
  const siteName = getXLogMeta(attributes, 'site_name')

  return {
    handle,
    characterId: character.characterId,
    blogUrl,

    icon: content.avatars?.map(avatar => convertIpfsUrl(avatar)).at(0),
    banner: content.banners?.map(banner => convertIpfsUrl(banner.address)).at(0),
    characterName,
    siteName,
    description: content.bio,
    footer: getXLogMeta(attributes, 'footer'),
    analytics: {
      google: getXLogMeta(attributes, 'ga'),
      umamiCloud: {
        url: getXLogMeta(attributes, 'uh'),
        id: getXLogMeta(attributes, 'ua'),
      },
    },
    socialPlatforms: connectedAccounts.map(account => parseConnectedAccount(account)),
    navigation: navigationList,
    customDomain: xLogCustomDomain,
    customCSS: getXLogMeta(attributes, 'css'),
  }
}
