import type { AttributesMetadata } from 'crossbell'

import { indexer } from './indexer'
import type { HandleOrCharacterId, Interaction, Navigation, SocialPlatform, XLogTraitType } from './types'

export async function getCharacterId(handleOrCharacterId: HandleOrCharacterId) {
  if (typeof handleOrCharacterId === 'number')
    return handleOrCharacterId

  const character = await indexer.character.getByHandle(handleOrCharacterId)
  if (!character)
    throw new Error('Character not found')
  return character.characterId
}

export function convertIpfsUrl(url?: string) {
  if (!url)
    return
  return url.replaceAll(/ipfs:\/\/([^\n ]+)/g, 'https://ipfs.4everland.xyz/ipfs/' + '$1')
}

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
  account: string,
): SocialPlatform {
  const [, id, platform] = account.match(/csb:\/\/account:(.+)@(.+)/) as string[]
  if (!platform || !id)
    throw new Error('Invalid connected account')
  return { platform, id }
}

export async function getNoteInteractionCount(
  characterId: number,
  noteId: number,
): Promise<Interaction> {
  const [
    views,
    likes,
    comments,
  ] = await Promise.all([
    indexer.stat.getForNote(characterId, noteId),
    indexer.link.getBacklinksByNote(characterId, noteId, { linkType: 'like' }),
    indexer.note.getMany({ toCharacterId: characterId, toNoteId: noteId }),
  ])

  return {
    views: views.viewDetailCount,
    likes: likes.count,
    comments: comments.count,
  }
}
