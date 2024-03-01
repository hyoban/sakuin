import { indexer } from './indexer'
import { platforms } from './platforms'

export async function getCharacter(
  handle: string,
  siteUrl?: string,
) {
  return indexer.character.getByHandle(handle)
    .then((character) => {
      const res = character?.metadata?.content
      const xLogNavigation = res?.attributes?.find(attr => attr.trait_type === 'xlog_navigation')
      const navigationList = xLogNavigation
        ? JSON.parse(
          xLogNavigation.value as string,
        ) as Array<{
          id: string
          label: string
          url: string
        }>
        : []

      const xLogCustomDomain = res?.attributes?.find(attr => attr.trait_type === 'xlog_custom_domain')?.value
      const blogUrl = xLogCustomDomain ? `https://${xLogCustomDomain}` : `https://${handle}.xlog.app`

      const siteName = res?.attributes?.find(attr => attr.trait_type === 'xlog_site_name')?.value as string

      return {
        name: res?.name,
        siteName: siteName || res?.name,
        bio: res?.bio,
        characterId: character?.characterId,
        avatar: res?.avatars?.map((avatar) => {
          return avatar.replaceAll(
            /ipfs:\/\/([^\n ]+)/g,
            'https://ipfs.4everland.xyz/ipfs/' + '$1',
          )
        }).at(0),
        blogUrl,
        links: [
          ...(res?.connected_accounts ?? [])
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
    })
}
