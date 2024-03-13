'use client'
import { useState, useTransition } from 'react'
import type { Post } from 'sakuin'

import { fetchMorePost } from './action'
import { PostItem } from './post-item'

export function PostList({
  posts,
  cursor,
}: {
  posts: Array<Post & { coverSize: { width: number, height: number } | null }>
  cursor: string | null
}) {
  const [currentPosts, setCurrentPosts] = useState(posts)
  const [currentCursor, setCurrentCursor] = useState(cursor)
  const [isLoadMorePending, startLoadMoreTransition] = useTransition()

  return (
    <>
      {currentPosts.map(post => <PostItem key={post.slug} post={post} />)}
      {currentCursor && (
        <button
          type="button"
          onClick={() => {
            startLoadMoreTransition(
              async () => {
                const { posts, cursor } = await fetchMorePost(currentCursor)
                setCurrentPosts([...currentPosts, ...posts])
                setCurrentCursor(cursor)
              },
            )
          }}
          disabled={isLoadMorePending}
          className="px-2 py-1 rounded-full hover:bg-neutral-100 disabled:hover:bg-inherit dark:hover:bg-neutral-800 opacity-60 hover:opacity-100 disabled:opacity-20"
        >
          {isLoadMorePending
            ? <span className="ml-2 i-lucide-loader-2 animate-spin" />
            : <span>Next</span>}
        </button>
      )}
    </>
  )
}
