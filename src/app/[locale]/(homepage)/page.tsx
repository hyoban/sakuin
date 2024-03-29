import type { Language } from 'sakuin'

import { env } from '../../../env'
import { client } from '../../../lib/client'
import { getImageDimensionByUri } from '../utils'
import { PostList } from './post-list'

export default async function HomePage({ params }: { params: { locale: Language } }) {
  const { list: posts, cursor } = await client.post.getMany(env.HANDLE, { translate: { to: params.locale, from: env.LANGUAGE } })

  const postsWithCoverSize = await Promise.all(posts.map(async (post, index) => {
    if (!post.cover)
      return { ...post, coverSize: null }

    const size = await getImageDimensionByUri(post.cover)
    return {
      ...post,
      coverSize: size,
      priority: index < 3,
    }
  }))

  return (
    <PostList
      posts={postsWithCoverSize}
      cursor={cursor}
    />
  )
}
