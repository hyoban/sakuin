export type SocialPlatform = {
  platform: string,
  id: string,
}

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
