import type { AttributesMetadata } from 'crossbell'

export function capitalize(str: string) {
  return str.replaceAll(/\b\w/g, l => l.toUpperCase()).replaceAll('-', ' ')
}

export function convertIpfsUrl(url: string) {
  return url.replaceAll(/ipfs:\/\/([^\n ]+)/g, 'https://ipfs.4everland.xyz/ipfs/' + '$1')
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

export function getXLogMetaInAttributes(
  attributes: AttributesMetadata['attributes'],
  type: 'navigation'
): XLogNavigation[]
export function getXLogMetaInAttributes(
  attributes: AttributesMetadata['attributes'],
  type: Exclude<XLogTraitType, 'navigation'>,
): string | undefined
export function getXLogMetaInAttributes(
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
    return JSON.parse(attribute as string) as XLogNavigation[]

  return attribute as string
}

export function parseConnectedAccount(
  account: string,
): { platform: string, id: string } {
  const [, id, platform] = account.match(/csb:\/\/account:(.+)@(.+)/) as string[]
  if (!platform || !id)
    throw new Error('Invalid connected account')
  return { platform, id }
}
