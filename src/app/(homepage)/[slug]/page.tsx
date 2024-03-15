import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { CommentList } from '../../../components/post/comment'
import { Markdown } from '../../../components/post/markdown'
import { PageMeta } from '../../../components/post/meta'
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
        <Markdown content={post.content} />
      </article>
      <Suspense fallback="Loading comments...">
        <CommentList noteId={post.noteId} />
      </Suspense>
    </main>
  )
}
