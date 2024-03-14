import type { Comment } from 'sakuin'

import { AppLink } from '../../app/external-link'
import { env } from '../../env'
import { client } from '../../lib/client'

export async function CommentList({ noteId }: { noteId: number }) {
  const comments = await client.comment.getAll(env.HANDLE, noteId)
  if (comments.length === 0)
    return null

  return (
    <section>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <CommentView key={comment.noteId} comment={comment} />
        ))}
      </ul>
    </section>
  )
}

function CommentView({ comment }: { comment: Comment }) {
  return (
    <li>
      <p>
        <AppLink href={comment.sender.url} className="font-bold">
          {comment.sender.name}
        </AppLink>
        {' '}
        :
        {' '}
        {comment.content}
        {comment.likes > 0 && (
          <>
            {' '}
            <span className="i-lucide-thumbs-up text-xs align-baseline" />
            {' '}
            {comment.likes}
          </>
        )}
      </p>
      <ul>
        {comment.replies.map(reply => (
          <CommentView key={reply.noteId} comment={reply} />
        ))}
      </ul>
    </li>
  )
}
