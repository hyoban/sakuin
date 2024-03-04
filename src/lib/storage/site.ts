import { convertIpfsUrl, getXLogMetaInAttributes, parseConnectedAccount } from '../utils'
import { indexer } from './indexer'
import { platforms } from './platforms'

export async function getSiteInfo(
  handle: string,
  siteUrl?: string,
) {
  const character = await indexer.character.getByHandle(handle)
  if (!character)
    throw new Error('Character not found')

  const content = character.metadata?.content

  const connectedAccounts = content?.connected_accounts ?? []
  const navigationList = getXLogMetaInAttributes(content?.attributes, 'xlog_navigation') ?? []
  const xLogCustomDomain = getXLogMetaInAttributes(content?.attributes, 'xlog_custom_domain')
  const blogUrl = xLogCustomDomain ? `https://${xLogCustomDomain}` : `https://${handle}.xlog.app`
  const characterName = content?.name
  const siteName = getXLogMetaInAttributes(content?.attributes, 'xlog_site_name')

  return {
    characterName,
    siteName: siteName ?? characterName,
    description: content?.bio,
    characterId: character.characterId,
    icon: content?.avatars?.map(avatar => convertIpfsUrl(avatar)).at(0),
    banner: content?.banners?.map(banner => convertIpfsUrl(banner.address)).at(0),
    blogUrl,
    links: [
      ...connectedAccounts
        .map((account) => {
          const { platform, id } = parseConnectedAccount(account)
          if (!platforms[platform])
            return

          return {
            href: platforms[platform]?.url?.replace('{username}', id),
            title: platforms[platform]?.name.toLocaleLowerCase(),
            icon: platforms[platform]?.icon,
          }
        }),
      ...navigationList
        .filter(nav => nav.url.startsWith('http') && nav.url !== siteUrl)
        .map(nav => ({
          href: nav.url,
          title: nav.label.toLowerCase(),
          icon: undefined,
        })),
      {
        href: blogUrl,
        title: 'blog',
        icon: 'i-lucide-book',
      },
    ]
      .filter(Boolean)
      .sort((a, b) => {
        // icon first
        if (a.icon && !b.icon)
          return -1
        if (!a.icon && b.icon)
          return 1
        // then title
        return a.title?.localeCompare(b.title ?? '') ?? 0
      }),
  }
}
