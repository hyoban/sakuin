import { env } from '../../env'
import { client } from '../../lib/client'
import { PostItem } from './post-item'

export const revalidate = 3600

export default async function HomePage() {
  const posts = await client.post.getAll(env.HANDLE, { orderBy: 'publishedAt' })

  return (
    <>
      {posts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </>
  )
}
