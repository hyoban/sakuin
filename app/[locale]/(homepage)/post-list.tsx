'use client'
import { atom, useAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { useTransition } from 'react'

import { fetchMorePost } from './action'
import type { PostWithCoverInfo } from './post-item'
import { PostItem } from './post-item'

const currentPostsAtom = atom<PostWithCoverInfo[]>([])
const currentCursorAtom = atom<string | null>(null)

export function PostList({
  posts,
  cursor,
}: {
  posts: PostWithCoverInfo[],
  cursor: string | null,
}) {
  useHydrateAtoms([[currentPostsAtom, posts]])
  useHydrateAtoms([[currentCursorAtom, cursor]])
  const [currentPosts, setCurrentPosts] = useAtom(currentPostsAtom)
  const [currentCursor, setCurrentCursor] = useAtom(currentCursorAtom)
  const [isLoadMorePending, startLoadMoreTransition] = useTransition()

  return (
    <>
      {currentPosts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
      {currentCursor && (
        <button
          type="button"
          onClick={() => {
            startLoadMoreTransition(async () => {
              const { posts, cursor } = await fetchMorePost(currentCursor)
              setCurrentPosts([...currentPosts, ...posts])
              setCurrentCursor(cursor)
            })
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
