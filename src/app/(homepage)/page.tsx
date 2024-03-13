import { env } from '../../env'
import { client } from '../../lib/client'
import { ListItem } from '../list-item'

export const revalidate = 3600

export default async function HomePage() {
  const posts = await client.post.getAll(env.HANDLE, { orderBy: 'publishedAt' })

  return (
    <>
      {posts.map(blog => (
        <ListItem
          key={blog.slug}
          title={blog.title}
          description={blog.date.slice(0, 10)}
          superscript={`${blog.views} views`}
          link={blog.slug}
        />
      ))}
    </>

  )
}
