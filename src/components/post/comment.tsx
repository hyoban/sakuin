import { revalidatePath } from 'next/cache'
import { Suspense } from 'react'
import type { Comment, CommentInput } from 'sakuin'

import { AppLink } from '../../app/external-link'
import { env } from '../../env'
import { client } from '../../lib/client'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { SubmitButton } from './submit-button'

export function Comment({ noteId }: { noteId: number }) {
  return (
    <section>
      <h2>Comments</h2>
      <CommentForm noteId={noteId} />
      <Suspense fallback="Loading comments...">
        <CommentList noteId={noteId} />
      </Suspense>
    </section>
  )
}

function CommentForm({ noteId }: { noteId: number }) {
  async function createComment(formData: FormData) {
    'use server'

    const rawFormData: CommentInput = {
      content: formData.get('content') as string || '',
      email: formData.get('email') as string || '',
      name: formData.get('name') as string || '',
      url: formData.get('url') as string || '',
      targetCharacterId: await client.getCharacterId(env.HANDLE),
      targetNoteId: noteId,
    }

    await client.comment.putAnonymous(rawFormData)
    revalidatePath('/post/[slug]', 'page')
  }

  return (
    <>
      <p className="text-sm opacity-80">Comment send here will be anonymous, you can login your account in xLog and comment there.</p>
      <form action={createComment} className="flex flex-col gap-4">
        <section className="flex flex-wrap gap-4">
          <section>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </section>
          <section>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </section>
          <section>
            <Label htmlFor="url">Website</Label>
            <Input id="url" name="url" type="url" />
          </section>
        </section>
        <Label htmlFor="content">Comment</Label>
        <Textarea id="content" name="content" required />
        <SubmitButton />
      </form>
    </>
  )
}

async function CommentList({ noteId }: { noteId: number }) {
  const comments = await client.comment.getAll(env.HANDLE, noteId)
  if (comments.length === 0)
    return null

  return (
    <ul>
      {comments.map(comment => (
        <CommentView key={comment.noteId} comment={comment} />
      ))}
    </ul>

  )
}

function CommentView({ comment }: { comment: Comment }) {
  return (
    <li>
      <p>
        <AppLink href={comment.url} className="font-bold">
          {comment.name}
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
