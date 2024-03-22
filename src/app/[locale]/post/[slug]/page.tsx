import { notFound } from 'next/navigation'
import type { Language } from 'sakuin'

import { Comment } from '../../../../components/post/comment'
import { Markdown } from '../../../../components/post/markdown'
import { PageMeta, PostMeta } from '../../../../components/post/meta'
import { env } from '../../../../env'
import { client } from '../../../../lib/client'

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: Language },
}) {
  const { list: posts } = await client.post.getMany(env.HANDLE, { translate: { to: locale, from: 'zh' } })
  const slugs = posts.map(post => post.slug)
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({ params }: { params: { slug: string, locale: Language } }) {
  const { HANDLE } = env
  const post = await client.post.getBySlug(HANDLE, params.slug, { translate: { to: params.locale, from: 'zh' } })
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
      <Comment noteId={post.noteId} />
    </main>
  )
}
