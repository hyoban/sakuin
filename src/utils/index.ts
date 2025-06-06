import type { AttributesMetadata } from 'crossbell'

import type { Navigation, SocialPlatform } from '../types'

export * from './ipfs-parser'

// eslint-disable-next-line unused-imports/no-unused-vars
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

type XLogTraitType = RemovePrefix<(typeof XLogTrait)[number]>

export function getXLogMeta(
  attributes: AttributesMetadata['attributes'],
  type: 'navigation',
): Navigation[]
export function getXLogMeta(
  attributes: AttributesMetadata['attributes'],
  type: 'disable_ai_summary',
): boolean | undefined
export function getXLogMeta(
  attributes: AttributesMetadata['attributes'],
  type: Exclude<XLogTraitType, 'navigation' | 'disable_ai_summary'>,
): string | undefined
export function getXLogMeta(
  attributes: AttributesMetadata['attributes'],
  type: XLogTraitType,
) {
  const attribute = attributes?.find(
    attr => attr.trait_type === `xlog_${type}`,
  )?.value
  if (!attribute) {
    if (type === 'navigation')
      return []
    return
  }

  if (type === 'navigation')
    return JSON.parse(attribute as string) as Navigation[]
  if (type === 'disable_ai_summary')
    return attribute as boolean
  return attribute as string
}

export function getFullXLogMeta(attributes: AttributesMetadata['attributes']) {
  const xlogMeta: Record<
    Exclude<XLogTraitType, 'navigation' | 'disable_ai_summary'>,
    string
  > & { navigation: Navigation[] } & { disable_ai_summary: boolean } = {
    css: '',
    ga: '',
    ua: '',
    uh: '',
    site_name: '',
    navigation: [],
    custom_domain: '',
    footer: '',

    slug: '',
    disable_ai_summary: false,

    sender_name: '',
    sender_email: '',
    sender_url: '',
  }
  if (!attributes)
    return xlogMeta

  for (const trait of attributes) {
    const { trait_type, value } = trait
    if (!trait_type?.startsWith('xlog_'))
      continue

    const key = trait_type.replace('xlog_', '') as XLogTraitType

    if (key === 'navigation') {
      xlogMeta.navigation = JSON.parse(value as string) as Navigation[]
      continue
    }

    if (key === 'disable_ai_summary') {
      xlogMeta.disable_ai_summary = value as boolean
      continue
    }

    xlogMeta[key] = value as string
  }
  return xlogMeta
}

export function parseConnectedAccount(
  account: string | { uri: string, extra: Record<string, string> },
): SocialPlatform {
  const uri = typeof account === 'string' ? account : account.uri
  // eslint-disable-next-line regexp/no-misleading-capturing-group
  const [, id, platform] = /csb:\/\/account:(.+)@(.+)/.exec(uri) as string[]
  if (!platform || !id)
    throw new Error('Invalid connected account')
  return { platform, id }
}
