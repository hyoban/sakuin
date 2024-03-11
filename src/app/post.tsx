/* eslint-disable @eslint-react/dom/no-dangerously-set-innerhtml */
import rehypeShiki from '@shikijs/rehype'
import rehypeStringify from 'rehype-stringify'
import remarkGithubAlerts from 'remark-github-alerts'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import { env } from '../env'
import { getPostBySlug } from '../lib/storage'
import { getCommentFull } from '../lib/storage/comment'
import type { Comment, InteractionCount } from '../lib/storage/types'
import { AppLink } from './external-link'

export async function Post({ slug }: { slug: string }) {
  const post = await getPostBySlug(env.HANDLE, slug)
  if (!post)
    return null
  const postContent = await unified()
    .use(remarkParse)
    .use(remarkGithubAlerts)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeShiki, {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(post.content)

  const comments = await getCommentFull(env.HANDLE, post.noteId)
  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert">
      <article>
        <h1>{post.title}</h1>
        <InteractionView
          interaction={{
            views: post.views,
            likes: post.likes,
            comments: post.comments,
            tips: post.tips,
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: postContent.toString() }} />
      </article>
      <section>
        <h2>Comments</h2>
        <ul>
          {comments.map(comment => (
            <CommentView key={comment.noteId} comment={comment} />
          ))}
        </ul>
      </section>
    </main>
  )
}

function InteractionView({ interaction }: { interaction: InteractionCount }) {
  return (
    <div className="flex gap-4 my-4">
      <span className="flex gap-2 items-center">
        <span className="i-lucide-eye" />
        <span className="text-lg">{interaction.views}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="i-lucide-thumbs-up" />
        <span className="text-lg">{interaction.likes}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="i-lucide-circle-dollar-sign" />
        <span className="text-lg">{interaction.tips}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="i-lucide-message-circle" />
        <span className="text-lg">{interaction.comments}</span>
      </span>
    </div>
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
