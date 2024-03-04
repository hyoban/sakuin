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

export type XLogTraitType = XLogTrait[number]

export type XLogNavigation = {
  id: string
  label: string
  url: string
}

export function getXLogMetaInAttributes(
  attributes: AttributesMetadata['attributes'],
  type: 'xlog_navigation'
): XLogNavigation[] | undefined
export function getXLogMetaInAttributes(
  attributes: AttributesMetadata['attributes'],
  type: Exclude<XLogTraitType, 'xlog_navigation'>,
): string | undefined
export function getXLogMetaInAttributes(
  attributes: AttributesMetadata['attributes'],
  type: XLogTraitType,
) {
  const attribute = attributes?.find(attr => attr.trait_type === type)?.value
  if (!attribute)
    return

  if (type === 'xlog_navigation')
    return JSON.parse(attribute as string) as XLogNavigation[]

  return attribute as string
}
