import Image from 'next/image'
import type { Post } from 'sakuin'

import { env } from '../../../env'
import { client } from '../../../lib/client'
import { AppLink } from '../../external-link'
import { getImageDimensionByUri } from '../../utils'

export const revalidate = 3600

export default async function ShortPage() {
  const { list: shorts } = await client.short.getMany(env.HANDLE)

  return (
    <div className="columns-3xs">
      {shorts.map(short => (<ShortItem key={short.slug} short={short} />))}
    </div>
  )
}

async function ShortItem(
  { short }: { short: Post },
) {
  if (!short.cover)
    return null
  const { xlogUrl } = await client.site.getInfo(env.HANDLE)
  const size = await getImageDimensionByUri(short.cover)
  return (
    <AppLink
      href={`${xlogUrl}/${short.slug}`}
      key={short.slug}
      className="not-prose my-3 flex flex-col rounded-md overflow-hidden hover:bg-neutral-50 dark:hover:bg-neutral-800"
    >
      <Image src={short.cover} alt={short.title} width={size?.width} height={size?.height} />
      <span className="p-3">{short.content}</span>
    </AppLink>
  )
}
