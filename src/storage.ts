import type { CrossbellAPIResponse, SiteInfo, UnghResponse } from './types'

export async function getLatestBlogList() {
  return await fetch('https://indexer.crossbell.io/v1/notes?characterId=51657&tags=post&limit=3')
    .then(res => res.json() as Promise<CrossbellAPIResponse>)
    .then(res => res.list.map(blog => ({
      title: blog.metadata.content.title,
      link: `https://hyoban.xlog.app/${blog.metadata.content.attributes.find(attr => attr.trait_type === 'xlog_slug')?.value as string}`,
      date: blog.metadata.content.date_published,
    })))
}

async function getProjects() {
  const projectNotes = await fetch('https://indexer.crossbell.io/v1/notes?characterId=51657&tags=portfolio&limit=3')
    .then(res => res.json() as Promise<CrossbellAPIResponse>)
    .then(res => res.list.filter(note => note.metadata.content.external_urls.some(url => url.includes('github'))))

  projectNotes.sort((a, b) => {
    const aDate = new Date(a.metadata.content.date_published)
    const bDate = new Date(b.metadata.content.date_published)
    return bDate.getTime() - aDate.getTime()
  })

  return projectNotes
    .flatMap(note => note.metadata.content.external_urls[0]?.split('/').slice(-1))
    .filter(Boolean)
}

export async function getGitHubProjects() {
  const projects = await getProjects()
  return await Promise.all(projects.map(async (project) => {
    const res = await fetch(`https://ungh.cc/repos/hyoban/${project}`)
    const response = await res.json() as UnghResponse
    return {
      ...response.repo,
      link: `https://github.com/${response.repo.repo}`,
    }
  }))
}

export async function getSiteInfo() {
  return fetch('https://ipfs.crossbell.io/ipfs/QmaitSZt8iMjQgQEp9k6iEXW2Pt8Ypjb1CrSNXgdQkJnQ8')
    .then(res => res.json() as Promise<SiteInfo>)
    .then((res) => {
      const navigationList = JSON.parse(
        res.attributes.find(attr => attr.trait_type === 'xlog_navigation')?.value as string,
      ) as Array<{
        id: string
        label: string
        url: string
      }>
      return {
        ...res,
        links: [
          // connected_accounts like "csb://account:0xhyoban@twitter"
          ...res.connected_accounts
            .map((account) => {
              const splitIndex = account.slice('csb://account:'.length).lastIndexOf('@')
              const username = account.slice('csb://account:'.length).slice(0, splitIndex)
              const platform = account.slice('csb://account:'.length).slice(splitIndex + 1)
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
            .filter(nav => nav.url.startsWith('http') && nav.url !== 'https://hyoban.cc')
            .map(nav => ({
              href: nav.url,
              title: nav.label.toLowerCase(),
            })),
          {
            href: 'https://hyoban.xlog.app',
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
