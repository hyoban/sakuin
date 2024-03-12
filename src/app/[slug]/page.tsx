import rehypeShiki from '@shikijs/rehype'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Tweet } from 'react-tweet'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkGithubAlerts from 'remark-github-alerts'
import remarkParse from 'remark-parse'
import type { Comment, InteractionCount } from 'sakuin'
import { getCommentFull, getPostBySlug, getPostFull } from 'sakuin'

import { env } from '../../env'
import { AppLink } from '../external-link'
import { rehypeEmbed, TweetTransformer } from './rehype-embed'

export async function generateStaticParams() {
  // eslint-disable-next-line unicorn/no-await-expression-member
  const slugs = (await getPostFull(env.HANDLE)).map(post => post.slug)
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(env.HANDLE, params.slug)
  if (!post)
    return null

  const comments = await getCommentFull(env.HANDLE, post.noteId)
  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert">
      <article>
        <h1>{post.title}</h1>
        <div className="flex gap-4 items-center mb-6">
          <InteractionView
            interaction={{
              views: post.views,
              likes: post.likes,
              comments: post.comments,
              tips: post.tips,
            }}
          />
          {post.tags.map(tag => (
            <span key={tag}>
              {`# ${tag}`}
            </span>
          ))}
        </div>
        <MDXRemote
          source={post.content}
          components={{ tweet: (props: { id: string }) => <div className="not-prose"><Tweet id={props.id} /></div> }}
          options={{
            mdxOptions: {
              remarkRehypeOptions: { allowDangerousHtml: true },
              remarkPlugins: [
                // @ts-expect-error I do not care
                remarkParse,
                // @ts-expect-error I do not care
                remarkGithubAlerts,
                remarkGfm,
              ],
              rehypePlugins: [
                // @ts-expect-error I do not care
                [rehypeEmbed, { transformers: [TweetTransformer] }],
                // @ts-expect-error I do not care
                [rehypeRaw, { passThrough: ['mdxjsEsm', 'mdxJsxFlowElement'] }],
                // @ts-expect-error I do not care
                [rehypeShiki, { themes: { light: 'vitesse-light', dark: 'vitesse-dark' } }],
              ],
              format: 'md',
            },
          }}
        />
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
    <div className="flex gap-4">
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
