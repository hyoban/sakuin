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
import { Comment } from '../lib/storage/types'

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
    .process(`# ${post.title}\n${post.content}`)

  const comments = await getCommentFull(env.HANDLE, post.noteId)
  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert">
      <article dangerouslySetInnerHTML={{ __html: String(postContent) }} />
      <section>
        <h2>Comments</h2>
        <ul>
          {comments.map(comment => (
            <Comment key={comment.noteId} comment={comment} />
          ))}
        </ul>
      </section>
    </main>
  )
}

function Comment({ comment }: { comment: Comment }) {
  return (
    <li>
      <p>
        {comment.sender.name}
        {' '}
        :
        {' '}
        {comment.content}
      </p>
      <ul>
        {comment.replies.map(reply => (
          <Comment key={reply.noteId} comment={reply} />
        ))}
      </ul>
    </li>
  )
}
