import { platforms } from './storage/platforms'
import type { Navigation, SocialPlatform } from './storage/types'

export type Link = {
  href: string
  title: string
  icon?: string
}

export function getUniverseLinks(
  connectedAccounts: SocialPlatform[] = [],
  navigationList: Navigation[] = [],
  xlogUrl = '',
  siteUrl = '',
) {
  return [
    ...connectedAccounts
      .map((account) => {
        const { platform, id } = account

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
      href: xlogUrl,
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

export function capitalize(str: string) {
  return str.replaceAll(/\b\w/g, l => l.toUpperCase()).replaceAll('-', ' ')
}
