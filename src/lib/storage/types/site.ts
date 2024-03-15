export type SocialPlatform = {
  platform: string,
  id: string,
}

const XLogTrait = [
  'xlog_css',
  'xlog_ga',
  'xlog_ua',
  'xlog_uh',
  'xlog_site_name',
  'xlog_navigation',
  'xlog_custom_domain',
  'xlog_footer',

  'xlog_slug',
  'xlog_disable_ai_summary',

  'xlog_sender_name',
  'xlog_sender_email',
  'xlog_sender_url',
] as const

type RemovePrefix<T extends string> = T extends `xlog_${infer U}` ? U : never

export type XLogTraitType = RemovePrefix<typeof XLogTrait[number]>

export type Navigation = {
  id: string,
  label: string,
  url: string,
}

export type SiteInfo = {
  handle: string,
  characterId: number,
  xlogUrl: string,

  // info from XLog Site Settings
  icon?: string,
  banner?: string,
  characterName?: string,
  siteName?: string,
  description?: string,
  footer?: string,
  analytics: {
    google?: string,
    umamiCloud: {
      url?: string,
      id?: string,
    },
  },
  socialPlatforms: SocialPlatform[],
  navigation: Navigation[],
  customDomain?: string,
  customCSS?: string,
}
