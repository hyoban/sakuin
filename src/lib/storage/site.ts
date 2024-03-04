import { convertIpfsUrl } from '../utils'
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

  const xLogNavigation = content?.attributes?.find(attr => attr.trait_type === 'xlog_navigation')
  const navigationList = xLogNavigation
    ? JSON.parse(
      xLogNavigation.value as string,
    ) as Array<{
      id: string
      label: string
      url: string
    }>
    : []

  const xLogCustomDomain = content?.attributes?.find(attr => attr.trait_type === 'xlog_custom_domain')?.value
  const blogUrl = xLogCustomDomain ? `https://${xLogCustomDomain}` : `https://${handle}.xlog.app`

  const siteName = content?.attributes?.find(attr => attr.trait_type === 'xlog_site_name')?.value as string

  return {
    name: content?.name,
    siteName: siteName || content?.name,
    description: content?.bio,
    characterId: character.characterId,
    icon: content?.avatars?.map(avatar => convertIpfsUrl(avatar)).at(0),
    banner: content?.banners?.map(banner => convertIpfsUrl(banner.address)).at(0),
    blogUrl,
    links: [
      ...(content?.connected_accounts ?? [])
        .map((account) => {
          // connected_accounts like "csb://account:0xhyoban@twitter"
          const contextWithoutPrefix = account.slice(14)
          const splitIndex = contextWithoutPrefix.lastIndexOf('@')
          const username = contextWithoutPrefix.slice(0, splitIndex)
          const platform = contextWithoutPrefix.slice(splitIndex + 1)
          if (
            !platform || !username
            || !platforms[platform]?.url
            || !platforms[platform]?.name
          )
            return
          return {
            href: platforms[platform]!.url!.replace('{username}', username),
            title: platforms[platform]!.name.toLocaleLowerCase(),
            icon: platforms[platform]!.icon,
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
        return a.title.localeCompare(b.title)
      }),
  }
}
