import { createIndexer } from 'crossbell'
import { ofetch } from 'ofetch'

import type { UnghResponse } from '../types/github'
import type { Stat } from '../types/stat'

const indexer = createIndexer()
const indexerFetch = ofetch.create({ baseURL: 'https://indexer.crossbell.io/v1' })

async function getViewDetailCount(
  characterId: number,
  noteId: number,
) {
  return indexerFetch<Stat>(`/stat/notes/${characterId}/${noteId}`)
    .then(stat => stat.viewDetailCount)
}

export async function getLatestPostFromXLog(handle: string) {
  const { characterId, blogUrl } = await getCharacter(handle)
  if (!characterId)
    return []

  return indexer.note.getMany({
    characterId,
    tags: 'post',
    sources: 'xlog',
    orderBy: 'publishedAt',
    limit: 5,
  })
    .then(res => res.list.map(blog => ({
      noteId: blog.noteId,
      title: blog.metadata?.content?.title,
      link: `${blogUrl}/${blog.metadata?.content?.attributes?.find(attr => attr.trait_type === 'xlog_slug')?.value as string}`,
      date: blog.metadata?.content?.date_published,
    })))
    .then(blogs => (
      Promise.all(blogs.map(async (blog) => {
        const views = await getViewDetailCount(characterId, blog.noteId)
        return { ...blog, views }
      }))
    ))
}

async function getGitHubRepo(handle: string) {
  const { characterId } = await getCharacter(handle)

  return await indexer.note.getMany({ characterId, tags: 'portfolio', orderBy: 'publishedAt' })
    .then(res => res.list
      .map(note => note.metadata?.content?.external_urls?.filter(Boolean) ?? [])
      .filter(urls => urls.some(url => url.startsWith('https://github.com')))
      .map(urls => urls[0]?.replace('https://github.com/', '')),
    )
}

export async function getGitHubProjects(handle: string) {
  const projects = await getGitHubRepo(handle)

  return await Promise.all(
    projects.map(async (project) => {
      const res = await ofetch<UnghResponse>(`https://ungh.cc/repos/${project}`)
      return { ...res.repo, link: `https://github.com/${res.repo.repo}` }
    }),
  )
}

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

      const siteName = res?.attributes?.find(attr => attr.trait_type === 'xlog_site_name')!.value as string
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
                || !PlatformsSyncMap[platform]?.url
                || !PlatformsSyncMap[platform]?.name
              )
                return
              return {
                href: PlatformsSyncMap[platform]!.url!.replace('{username}', username),
                title: PlatformsSyncMap[platform]!.name.toLocaleLowerCase(),
                icon: PlatformsSyncMap[platform]!.icon,
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

export const PlatformsSyncMap: Record<string, {
  name: string
  icon?: string
  url?: string
  identityFormatTemplate?: string
  portfolioDomain?: string
}> = {
  'telegram': {
    name: 'Telegram',
    url: 'https://t.me/{username}',
    icon: 'i-simple-icons-telegram',
  },
  'tg_channel': {
    name: 'Telegram Channel',
    url: 'https://t.me/{username}',
    icon: 'i-simple-icons-telegram',
  },
  'twitter': {
    name: 'Twitter',
    url: 'https://twitter.com/{username}',
    portfolioDomain: `https://twitter.com/`,
    icon: 'i-simple-icons-twitter',
  },
  'twitter_id': {
    name: 'Twitter',
    url: 'https://twitter.com/i/user/{username}',
    icon: 'i-simple-icons-twitter',
  },
  'x': {
    name: 'X',
    url: 'https://x.com/{username}',
    portfolioDomain: `https://x.com/`,
    icon: 'i-simple-icons-x',
  },
  'x_id': {
    name: 'X',
    url: 'https://x.com/i/user/{username}',
    icon: 'i-simple-icons-x',
  },
  'pixiv': {
    name: 'Pixiv',
    url: 'https://www.pixiv.net/users/{username}',
    portfolioDomain: `https://www.pixiv.net/`,
    icon: 'i-simple-icons-pixiv',
  },
  'substack': {
    name: 'Substack',
    url: 'https://{username}.substack.com/',
    icon: 'i-simple-icons-substack',
  },
  'medium': {
    name: 'Medium',
    url: 'https://medium.com/@{username}',
    icon: 'i-simple-icons-medium',
  },
  'github': {
    name: 'GitHub',
    url: 'https://github.com/{username}',
    portfolioDomain: `https://github.com/`,
    icon: 'i-simple-icons-github',
  },
  'jike': {
    name: '即刻',
    url: 'https://web.okjike.com/u/{username}',
  },
  'bilibili': {
    name: 'bilibili',
    icon: 'i-simple-icons-bilibili',
    url: 'https://space.bilibili.com/{username}',
    portfolioDomain: `https://www.bilibili.com/`,
  },
  'zhihu': {
    name: '知乎',
    url: 'https://www.zhihu.com/people/{username}',
    icon: 'i-simple-icons-zhihu',
  },
  'playstation': {
    name: 'PlayStation',
    url: 'https://psnprofiles.com/{username}',
    icon: 'i-simple-icons-playstation',
  },
  'nintendo switch': {
    name: 'Nintendo Switch',
    icon: 'i-simple-icons-nintendoswitch',
  },
  'discord server': {
    name: 'Discord Server',
    url: 'https://discord.gg/{username}',
    icon: 'i-simple-icons-discord',
  },
  'xiaoyuzhou': {
    name: '小宇宙播客',
    url: 'https://www.xiaoyuzhoufm.com/podcast/{username}',
    portfolioDomain: `https://www.xiaoyuzhoufm.com/`,
  },
  'steam': {
    name: 'Steam',
    url: 'https://steamcommunity.com/id/{username}',
    icon: 'i-simple-icons-steam',
  },
  'steam_profiles': {
    name: 'Steam',
    url: 'https://steamcommunity.com/profiles/{username}',
    icon: 'i-simple-icons-steam',
  },
  'gitlab': {
    name: 'Gitlab',
    url: 'https://gitlab.com/{username}',
    icon: 'i-simple-icons-gitlab',
  },
  'keybase': {
    name: 'Keybase',
    url: 'https://keybase.io/{username}',
    icon: 'i-simple-icons-keybase',
  },
  'youtube': {
    name: 'Youtube',
    url: 'https://youtube.com/@{username}',
    portfolioDomain: `https://youtube.com/`,
    icon: 'i-simple-icons-youtube',
  },
  'facebook': {
    name: 'Facebook',
    url: 'https://facebook.com/{username}',
    icon: 'i-simple-icons-facebook',
  },
  'whatsapp': {
    name: 'Whatsapp',
    url: 'https://wa.me/{username}',
    icon: 'i-simple-icons-whatsapp',
  },
  'mastodon': {
    name: 'Mastodon',
    url: 'https://{instance}/@{username}',
    identityFormatTemplate: 'username@instance.ltd',
    icon: 'i-simple-icons-mastodon',
  },
  'misskey': {
    name: 'Misskey',
    url: 'https://{instance}/@{username}',
    identityFormatTemplate: 'username@instance.ltd',
    icon: 'i-simple-icons-misskey',
  },
  'pleroma': {
    name: 'Pleroma',
    url: 'https://{instance}/users/{username}',
    identityFormatTemplate: 'username@instance.ltd',
    icon: 'i-simple-icons-pleroma',
  },
  'douban': {
    name: '豆瓣',
    url: 'https://www.douban.com/people/{username}',
    icon: 'i-simple-icons-douban',
  },
  'email': {
    name: 'Email',
    url: 'mailto:{username}',
    icon: 'i-lucide-mail',
  },
  '500px': {
    name: '500px',
    url: 'https://500px.com/p/{username}',
    icon: 'i-simple-icons-500px',
  },
}
