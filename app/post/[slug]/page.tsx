import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Comment } from '../../../components/post/comment'
import { Markdown } from '../../../components/post/markdown'
import { PageMeta, PostMeta } from '../../../components/post/meta'
import { env } from '../../../env'
import { client } from '../../../lib/client'

export async function generateStaticParams() {
  const { list: posts } = await client.post.getMany(env.HANDLE)
  const slugs = posts.map(post => post.slug)
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({
  params,
}: {
  params: { slug: string },
}) {
  const { HANDLE } = env
  const [post, site] = await Promise.all([
    client.post.getBySlug(HANDLE, params.slug),
    client.site.getInfo(HANDLE),
  ])
  if (!post)
    notFound()

  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert break-all">
      <PageMeta slug={params.slug} isPost />
      <article>
        <h1 className="flex justify-between items-center h-10">
          {post.title}
          {site.icon && (
            <Link href="/">
              <Image
                src={site.icon}
                alt="Site icon"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          )}
        </h1>
        <PostMeta slug={params.slug} isPost />
        <Markdown content={post.content} />
      </article>
      <Comment noteId={post.noteId} />
    </main>
  )
}
