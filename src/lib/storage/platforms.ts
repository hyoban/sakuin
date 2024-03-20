export const platforms: Record<string, {
  name: string,
  // TODO: icon should not be pure string
  icon?: string,
  url?: string,
  identityFormatTemplate?: string,
  portfolioDomain?: string,
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
    portfolioDomain: 'https://twitter.com/',
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
    portfolioDomain: 'https://x.com/',
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
    portfolioDomain: 'https://www.pixiv.net/',
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
    portfolioDomain: 'https://github.com/',
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
    portfolioDomain: 'https://www.bilibili.com/',
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
    portfolioDomain: 'https://www.xiaoyuzhoufm.com/',
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
    portfolioDomain: 'https://youtube.com/',
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
