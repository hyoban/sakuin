import type { Post } from 'sakuin'

import { env } from '../../env'
import { client } from '../../lib/client'
import { getImageDimensionByUri } from '../utils'
import { PostList } from './post-list'

export const revalidate = 3600

export default async function HomePage() {
  let posts: Post[] = []
  let cursor = null
  if (env.MODE === 'static')
    posts = await client.post.getAll(env.HANDLE)
  else
    ({ list: posts, cursor } = await client.post.getMany(env.HANDLE))

  const postsWithCoverSize = await Promise.all(posts.map(async (post) => {
    if (!post.cover)
      return { ...post, coverSize: null }

    const size = await getImageDimensionByUri(post.cover)
    return {
      ...post,
      coverSize: size,
    }
  }))

  return (
    <PostList
      posts={postsWithCoverSize}
      cursor={cursor}
    />
  )
}
