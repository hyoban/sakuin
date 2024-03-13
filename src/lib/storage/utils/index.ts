import type { AttributesMetadata } from 'crossbell'

import type { Navigation, SocialPlatform, XLogTraitType } from '../types'

export * from './ipfs-parser'

export function getXLogMeta(
  attributes: AttributesMetadata['attributes'],
  type: 'navigation'
): Navigation[]
export function getXLogMeta(
  attributes: AttributesMetadata['attributes'],
  type: Exclude<XLogTraitType, 'navigation'>,
): string | undefined
export function getXLogMeta(
  attributes: AttributesMetadata['attributes'],
  type: XLogTraitType,
) {
  const attribute = attributes?.find(attr => attr.trait_type === `xlog_${type}`)?.value
  if (!attribute) {
    if (type === 'navigation')
      return []
    return
  }

  if (type === 'navigation')
    return JSON.parse(attribute as string) as Navigation[]

  return attribute as string
}

export function getFullXLogMeta(
  attributes: AttributesMetadata['attributes'],
) {
  const xlogMeta: Record<Exclude<XLogTraitType, 'navigation'>, string> & { navigation: Navigation[] } = {
    css: '',
    ga: '',
    ua: '',
    uh: '',
    site_name: '',
    navigation: [],
    custom_domain: '',
    footer: '',

    slug: '',

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
    xlogMeta[key] = value as string
  }
  return xlogMeta
}

export function parseConnectedAccount(
  account: string | { uri: string, extra: Record<string, string> },
): SocialPlatform {
  const uri = typeof account === 'string' ? account : account.uri
  const [, id, platform] = uri.match(/csb:\/\/account:(.+)@(.+)/) as string[]
  if (!platform || !id)
    throw new Error('Invalid connected account')
  return { platform, id }
}