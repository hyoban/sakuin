import type { Character } from './types/character'
import type { UnghResponse } from './types/github'
import type { CrossbellAPIResponse } from './types/notes'

export async function getLatestBlogList(characterId: number) {
  return await fetch(`https://indexer.crossbell.io/v1/notes?characterId=${characterId}&tags=post`)
    .then(res => res.json() as Promise<CrossbellAPIResponse>)
    .then(res => res.list
      .slice(0, 5)
      .map(blog => ({
        title: blog.metadata.content.title,
        link: `https://hyoban.xlog.app/${blog.metadata.content.attributes.find(attr => attr.trait_type === 'xlog_slug')?.value as string}`,
        date: blog.metadata.content.date_published,
      })),
    )
}

async function getProjects(characterId: number) {
  const projectNotes = await fetch(`https://indexer.crossbell.io/v1/notes?characterId=${characterId}&tags=portfolio`)
    .then(res => res.json() as Promise<CrossbellAPIResponse>)
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

export async function getGitHubProjects(characterId: number) {
  const projects = await getProjects(characterId)
  return await Promise.all(projects.map(async (project) => {
    const res = await fetch(`https://ungh.cc/repos/${project}`)
    const response = await res.json() as UnghResponse
    return {
      ...response.repo,
      link: `https://github.com/${response.repo.repo}`,
    }
  }))
}

export async function getCharacter(
  handle: string,
  siteUrl?: string,
) {
  return fetch(`https://indexer.crossbell.io/v1/handles/${handle}/character`)
    .then(res => res.json() as Promise<Character>)
    .then((character) => {
      const res = character.metadata.content
      const navigationList = JSON.parse(
        res.attributes.find(attr => attr.trait_type === 'xlog_navigation')?.value ?? '',
      ) as Array<{
        id: string
        label: string
        url: string
      }>
      return {
        ...res,
        characterId: character.characterId,
        avatars: res.avatars.map((avatar) => {
          return avatar.replaceAll(
            /ipfs:\/\/([^\n ]+)/g,
            'https://ipfs.4everland.xyz/ipfs/' + '$1',
          )
        }),
        links: [
          ...res.connected_accounts
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
            href: `https://${handle}.xlog.app`,
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
