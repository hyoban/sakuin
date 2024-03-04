import type { XLogNavigation } from '../utils'
import { convertIpfsUrl, getXLogMetaInAttributes, parseConnectedAccount } from '../utils'
import { indexer } from './indexer'
import { platforms } from './platforms'

type Link = {
  href: string
  title: string
  icon?: string
}

function getUniverseLinks(
  connectedAccounts: string[] = [],
  navigationList: XLogNavigation[] = [],
  blogUrl = '',
  siteUrl = '',
) {
  return [
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
    .filter(link => link.href && link.title)
    .sort((a, b) => {
      // icon first
      if (a.icon && !b.icon)
        return -1
      if (!a.icon && b.icon)
        return 1
      // then title
      return a.title?.localeCompare(b.title ?? '') ?? 0
    }) as Link[]
}

export type SocialPlatform = {
  platform: string
  id: string
}

export type SiteInfo = {
  handle: string
  characterId: number
  blogUrl: string
  links: Link[]

  // info from XLog Site Settings
  icon?: string
  banner?: string
  characterName?: string
  siteName?: string
  description?: string
  footer?: string
  analytics: {
    google?: string
    umamiCloud: {
      url?: string
      id?: string
    }
  }
  socialPlatforms: SocialPlatform[]
  navigation: XLogNavigation[]
  customDomain?: string
  customCSS?: string
}

export async function getSiteInfo(
  handle: string,
  siteUrl?: string,
): Promise<SiteInfo> {
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
    handle,
    characterId: character.characterId,
    blogUrl,
    links: getUniverseLinks(connectedAccounts, navigationList, blogUrl, siteUrl),

    icon: content?.avatars?.map(avatar => convertIpfsUrl(avatar)).at(0),
    banner: content?.banners?.map(banner => convertIpfsUrl(banner.address)).at(0),
    characterName,
    siteName,
    description: content?.bio,
    footer: getXLogMetaInAttributes(content?.attributes, 'xlog_footer'),
    analytics: {
      google: getXLogMetaInAttributes(content?.attributes, 'xlog_ga'),
      umamiCloud: {
        url: getXLogMetaInAttributes(content?.attributes, 'xlog_uh'),
        id: getXLogMetaInAttributes(content?.attributes, 'xlog_ua'),
      },
    },
    socialPlatforms: connectedAccounts.map(account => parseConnectedAccount(account)),
    navigation: navigationList,
    customDomain: xLogCustomDomain,
    customCSS: getXLogMetaInAttributes(content?.attributes, 'xlog_css'),
  }
}
