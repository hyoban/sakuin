import { notFound } from 'next/navigation'
import type { Language } from 'sakuin'
import { languages } from 'sakuin'

import { Comment } from '../../../../components/post/comment'
import { Markdown } from '../../../../components/post/markdown'
import { PageMeta, PostMeta } from '../../../../components/post/meta'
import { env } from '../../../../env'
import { client } from '../../../../lib/client'

export async function generateStaticParams() {
  const params: Array<{ slug: string, locale: Language }> = []
  for (const locale of languages) {
    const { list: posts } = await client.page.getMany(env.HANDLE, { translateTo: locale })
    const slugs = posts.map(post => post.slug)
    params.push(...slugs.map(slug => ({ slug, locale })))
  }
  return params
}

export default async function PostPage({ params }: { params: { slug: string, locale: Language } }) {
  const { HANDLE } = env
  const post = await client.post.getBySlug(HANDLE, params.slug, { translateTo: params.locale })
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