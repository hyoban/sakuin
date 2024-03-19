import { notFound } from 'next/navigation'

import { Comment } from '../../../components/post/comment'
import { Markdown } from '../../../components/post/markdown'
import { PageMeta, PostMeta } from '../../../components/post/meta'
import { env } from '../../../env'
import { client } from '../../../lib/client'

export const revalidate = 3600

export async function generateStaticParams() {
  const pages = await client.page.getAll(env.HANDLE)
  const slugs = pages.map(post => post.slug)
  return slugs.map(slug => ({ slug }))
}

export default async function PagePage({ params }: { params: { slug: string } }) {
  const { HANDLE } = env
  const post = await client.page.getBySlug(HANDLE, params.slug)
  if (!post)
    notFound()

  return (
    <main className="antialiased prose prose-neutral dark:prose-invert break-all">
      <PageMeta slug={params.slug} />
      <article>
        <PostMeta slug={params.slug} />
        <Markdown content={post.content} />
      </article>
      <Comment noteId={post.noteId} />
    </main>
  )
}
