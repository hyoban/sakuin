'use client'

import { useState } from 'react'
import type { Post } from 'sakuin'

import { PostItem } from './post-item'

const pageSize = 8

export function PostList({ posts }: { posts: Array<Post & { coverSize: { width: number, height: number } | null }> }) {
  const [page, setPage] = useState(1)
  const maxPage = Math.ceil(posts.length / pageSize)

  return (
    <>
      {posts
        .slice((page - 1) * pageSize, page * pageSize)
        .map(post => (
          <PostItem key={post.slug} post={post} />
        ))}
      {posts.length > pageSize && (
        <div className="flex justify-center my-6">
          <button
            type="button"
            onClick={() => { setPage(page - 1) }}
            disabled={page === 1}
            className="px-2 py-1 rounded-full mr-4 hover:bg-neutral-100 disabled:hover:bg-inherit dark:hover:bg-neutral-800 opacity-60 hover:opacity-100 disabled:opacity-20"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => { setPage(page + 1) }}
            disabled={page === maxPage}
            className="px-2 py-1 rounded-full hover:bg-neutral-100 disabled:hover:bg-inherit dark:hover:bg-neutral-800 opacity-60 hover:opacity-100 disabled:opacity-20"
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}
