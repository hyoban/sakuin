import { env } from '../../env'
import { client } from '../../lib/client'
import { getImageDimensionByUri } from '../utils'
import { PostList } from './post-list'

export const revalidate = 3600

export default async function HomePage() {
  const posts = await client.post.getAll(env.HANDLE, { orderBy: 'publishedAt' })
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
    <PostList posts={postsWithCoverSize} />
  )
}
