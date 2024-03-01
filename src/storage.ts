import { ofetch } from 'ofetch'

import type { Character } from './types/character'
import type { UnghResponse } from './types/github'
import type { CrossbellAPIResponse } from './types/notes'
import type { Stat } from './types/stat'

async function getViewDetailCount(
  characterId: number,
  noteId: number,
) {
  return ofetch<Stat>(`https://indexer.crossbell.io/v1/stat/notes/${characterId}/${noteId}`)
    .then(stat => stat.viewDetailCount)
}

export async function getLatestBlogList(handle: string) {
  const { characterId, blogUrl } = await getCharacter(handle)
  return ofetch<CrossbellAPIResponse>(`https://indexer.crossbell.io/v1/notes?characterId=${characterId}&tags=post&sources=xlog`)
    .then(res => res.list
      .slice(0, 5)
      .map(blog => ({
        noteId: blog.noteId,
        title: blog.metadata.content.title,
        link: `${blogUrl}/${blog.metadata.content.attributes.find(attr => attr.trait_type === 'xlog_slug')?.value as string}`,
        date: blog.metadata.content.date_published,
      })),
    ).then(async (blogs) => {
      return await Promise.all(blogs.map(async (blog) => {
        const viewDetailCount = await getViewDetailCount(characterId, blog.noteId)
        return {
          ...blog,
          viewDetailCount,
        }
      }))
    })
}

async function getProjects(handle: string) {
  const { characterId } = await getCharacter(handle)
  const projectNotes = await ofetch<CrossbellAPIResponse>(`https://indexer.crossbell.io/v1/notes?characterId=${characterId}&tags=portfolio`)
    .then(res => res.list.filter(note => note.metadata.content.external_urls.some(url => url.startsWith('https://github.com'))))

  projectNotes.sort((a, b) => {
    const aDate = new Date(a.metadata.content.date_published)
    const bDate = new Date(b.metadata.content.date_published)
    return bDate.getTime() - aDate.getTime()
  })

  return projectNotes
    .map(note => note.metadata.content.external_urls[0]?.replace('https://github.com/', ''))
    .filter(Boolean)
}

export async function getGitHubProjects(handle: string) {
  const projects = await getProjects(handle)
  return await Promise.all(projects.map(async (project) => {
    const res = await ofetch<UnghResponse>(`https://ungh.cc/repos/${project}`)
    return {
      ...res.repo,
      link: `https://github.com/${res.repo.repo}`,
    }
  }))
}

export async function getCharacter(
  handle: string,
  siteUrl?: string,
) {
  return ofetch<Character>(`https://indexer.crossbell.io/v1/handles/${handle}/character`)
    .then((character) => {
      const res = character.metadata.content
      const xLogNavigation = res.attributes.find(attr => attr.trait_type === 'xlog_navigation')
      const navigationList = xLogNavigation
        ? JSON.parse(
          res.attributes.find(attr => attr.trait_type === 'xlog_navigation')?.value ?? '',
        ) as Array<{
          id: string
          label: string
          url: string
        }>
        : []

      const xLogCustomDomain = res.attributes.find(attr => attr.trait_type === 'xlog_custom_domain')?.value
      const blogUrl = xLogCustomDomain ? `https://${xLogCustomDomain}` : `https://${handle}.xlog.app`

      return {
        name: res.name,
        bio: res.bio,
        characterId: character.characterId,
        avatar: res.avatars?.map((avatar) => {
          return avatar.replaceAll(
            /ipfs:\/\/([^\n ]+)/g,
            'https://ipfs.4everland.xyz/ipfs/' + '$1',
          )
        }).at(0),
        blogUrl,
        links: [
          ...(res.connected_accounts ?? [])
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
              }
            }),
          ...navigationList
            .filter(nav => nav.url.startsWith('http') && nav.url !== siteUrl)
            .map(nav => ({
              href: nav.url,
              title: nav.label.toLowerCase(),
            })),
          {
            href: blogUrl,
            title: 'blog',
          },
        ].filter(Boolean).sort((a, b) => a.title.localeCompare(b.title)),
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
  },
  'tg_channel': {
    name: 'Telegram Channel',
    url: 'https://t.me/{username}',
  },
  'twitter': {
    name: 'Twitter',
    url: 'https://twitter.com/{username}',
    portfolioDomain: `https://twitter.com/`,
  },
  'twitter_id': {
    name: 'Twitter',
    url: 'https://twitter.com/i/user/{username}',
  },
  'x': {
    name: 'X',
    url: 'https://x.com/{username}',
    portfolioDomain: `https://x.com/`,
  },
  'x_id': {
    name: 'X',
    url: 'https://x.com/i/user/{username}',
  },
  'pixiv': {
    name: 'Pixiv',
    url: 'https://www.pixiv.net/users/{username}',
    portfolioDomain: `https://www.pixiv.net/`,
  },
  'substack': {
    name: 'Substack',
    url: 'https://{username}.substack.com/',
  },
  'medium': {
    name: 'Medium',
    url: 'https://medium.com/@{username}',
  },
  'github': {
    name: 'GitHub',
    url: 'https://github.com/{username}',
    portfolioDomain: `https://github.com/`,
  },
  'jike': {
    name: '即刻',
    icon: '/assets/social/jike.png',
    url: 'https://web.okjike.com/u/{username}',
  },
  'bilibili': {
    name: 'bilibili',
    icon: '/assets/social/bilibili.svg',
    url: 'https://space.bilibili.com/{username}',
    portfolioDomain: `https://www.bilibili.com/`,
  },
  'zhihu': {
    name: '知乎',
    url: 'https://www.zhihu.com/people/{username}',
  },
  'playstation': {
    name: 'PlayStation',
    url: 'https://psnprofiles.com/{username}',
  },
  'nintendo switch': {
    name: 'Nintendo Switch',
  },
  'discord server': {
    name: 'Discord Server',
    url: 'https://discord.gg/{username}',
  },
  'xiaoyuzhou': {
    name: '小宇宙播客',
    icon: '/assets/social/xiaoyuzhou2.png',
    url: 'https://www.xiaoyuzhoufm.com/podcast/{username}',
    portfolioDomain: `https://www.xiaoyuzhoufm.com/`,
  },
  'steam': {
    name: 'Steam',
    url: 'https://steamcommunity.com/id/{username}',
  },
  'steam_profiles': {
    name: 'Steam',
    url: 'https://steamcommunity.com/profiles/{username}',
  },
  'gitlab': {
    name: 'Gitlab',
    url: 'https://gitlab.com/{username}',
  },
  'keybase': {
    name: 'Keybase',
    url: 'https://keybase.io/{username}',
  },
  'youtube': {
    name: 'Youtube',
    url: 'https://youtube.com/@{username}',
    portfolioDomain: `https://youtube.com/`,
  },
  'facebook': {
    name: 'Facebook',
    url: 'https://facebook.com/{username}',
  },
  'whatsapp': {
    name: 'Whatsapp',
    url: 'https://wa.me/{username}',
  },
  'mastodon': {
    name: 'Mastodon',
    url: 'https://{instance}/@{username}',
    identityFormatTemplate: 'username@instance.ltd',
  },
  'misskey': {
    name: 'Misskey',
    url: 'https://{instance}/@{username}',
    identityFormatTemplate: 'username@instance.ltd',
  },
  'pleroma': {
    name: 'Pleroma',
    url: 'https://{instance}/users/{username}',
    identityFormatTemplate: 'username@instance.ltd',
  },
  'douban': {
    name: '豆瓣',
    icon: '/assets/social/douban.png',
    url: 'https://www.douban.com/people/{username}',
  },
  'email': {
    name: 'Email',
    icon: '/assets/social/email.png',
    url: 'mailto:{username}',
  },
  '500px': {
    name: '500px',
    url: 'https://500px.com/p/{username}',
  },
}
