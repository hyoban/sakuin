import Image from 'next/image'
import type { Post } from 'sakuin'

import { AppLink } from '../external-link'
import { getImageDimensionByUri } from '../utils'

export async function PostItem({ post }: { post: Post }) {
  if (!post.cover) {
    return (
      <AppLink
        href={post.slug}
        className="not-prose my-6 p-4 flex flex-col rounded-md overflow-hidden bg-neutral-50 dark:bg-neutral-800"
      >
        <PostDetail post={post} />
      </AppLink>
    )
  }

  const size = await getImageDimensionByUri(post.cover)
  return (
    <div
      className="not-prose my-6 flex flex-col rounded-md overflow-hidden bg-neutral-50 dark:bg-neutral-800"
    >
      <AppLink
        href={post.slug}
      >
        <Image
          src={post.cover}
          alt={post.title}
          width={size?.width}
          height={size?.height}
          className="object-cover w-full h-32 sm:h-48"
        />
      </AppLink>
      <div className="px-4 pb-4">
        <PostDetail post={post} />
      </div>
    </div>
  )
}

function PostDetail({ post }: { post: Post }) {
  return (
    <>
      <h2 className="text-2xl font-medium my-4">{post.title}</h2>
      <p className="opacity-90 text-[0.9rem]">{post.summary}</p>
      <p className="opacity-70 mt-4 text-sm space-x-2">
        <span>{post.publishedAt.slice(0, 10)}</span>
        {post.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
        <span>
          {post.views}
          {' '}
          views
        </span>
        <span>
          {post.comments}
          {' '}
          comments
        </span>
      </p>
    </>
  )
}
