import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { CommentList } from '../../../components/post/comment'
import { Markdown } from '../../../components/post/markdown'
import { PageMeta, PostMeta } from '../../../components/post/meta'
import { env } from '../../../env'
import { client } from '../../../lib/client'

export const revalidate = 3600

export async function generateStaticParams() {
  const { list: posts } = await client.post.getMany(env.HANDLE, { orderBy: 'updatedAt' })
  const slugs = posts.map(post => post.slug)
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { HANDLE } = env
  const post = await client.post.getBySlug(HANDLE, params.slug)
  if (!post)
    notFound()

  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert break-all">
      <PageMeta slug={params.slug} isPost />
      <article>
        <h1>{post.title}</h1>
        <PostMeta slug={params.slug} isPost />
        <Markdown content={post.content} />
      </article>
      <Suspense fallback="Loading comments...">
        <CommentList noteId={post.noteId} />
      </Suspense>
    </main>
  )
}
