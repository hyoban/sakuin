export type SocialPlatform = {
  platform: string
  id: string
}

type XLogTrait = [
  'xlog_css',
  'xlog_ga',
  'xlog_ua',
  'xlog_uh',
  'xlog_site_name',
  'xlog_navigation',
  'xlog_custom_domain',
  'xlog_footer',
]
  type RemovePrefix<T extends string> = T extends `xlog_${infer U}` ? U : never

export type XLogTraitType = RemovePrefix<XLogTrait[number]>

export type XLogNavigation = {
  id: string
  label: string
  url: string
}

export type SiteInfo = {
  handle: string
  characterId: number
  blogUrl: string

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
