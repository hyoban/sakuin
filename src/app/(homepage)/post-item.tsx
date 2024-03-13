import clsx from 'clsx'
import Image from 'next/image'
import type { Post } from 'sakuin'

import { AppLink } from '../external-link'

export function PostItem({ post }: { post: Post & { coverSize: { width: number, height: number } | null } }) {
  if (!post.cover) {
    return (
      <AppLink
        href={post.slug}
        className={(isLoading) => {
          return clsx(
            'not-prose my-6 p-4 flex flex-col rounded-md overflow-hidden bg-neutral-50 dark:bg-neutral-800',
            isLoading && 'animate-pulse',
          )
        }}
        transition
      >
        <PostDetail post={post} />
      </AppLink>
    )
  }

  return (
    <AppLink
      href={post.slug}
      transition
      className={isLoading => clsx(
        'not-prose my-6 flex flex-col rounded-md overflow-hidden bg-neutral-50 dark:bg-neutral-800',
        isLoading && 'animate-pulse',
      )}
    >
      <Image
        src={post.cover}
        alt={post.title}
        width={post.coverSize?.width}
        height={post.coverSize?.height}
        className="object-cover w-full h-32 sm:h-48"
      />
      <div className="px-4 pb-4">
        <PostDetail post={post} />
      </div>
    </AppLink>
  )
}

function PostDetail({ post }: { post: Post }) {
  return (
    <>
      <h2 className="text-2xl font-medium my-4">{post.title}</h2>
      <p className="opacity-90 text-[0.9rem]">{post.summary.length > 100 ? `${post.summary.slice(0, 100)}...` : post.summary}</p>
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
