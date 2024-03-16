import { env } from '../../env'
import { client } from '../../lib/client'
import { getImageDimensionByUri } from '../utils'
import { PostList } from './post-list'

export const revalidate = 3600

export default async function HomePage() {
  const { list: posts, cursor } = await client.post.getMany(env.HANDLE)

  const postsWithCoverSize = await Promise.all(posts.map(async (post) => {
    if (!post.cover?.address)
      return { ...post, coverSize: null }

    const size = await getImageDimensionByUri(post.cover.address)
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
