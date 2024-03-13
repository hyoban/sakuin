import rehypeShiki from '@shikijs/rehype'
import sizeOf from 'image-size'
import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Tweet } from 'react-tweet'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkGithubAlerts from 'remark-github-alerts'
import remarkParse from 'remark-parse'
import type { Comment, InteractionCount } from 'sakuin'

import { env } from '../../env'
import { client } from '../../lib/client'
import { AppLink } from '../external-link'
import { rehypeEmbed, transformers } from './rehype-embed'

export const revalidate = 3600

export async function generateStaticParams() {
  // eslint-disable-next-line unicorn/no-await-expression-member
  const slugs = (await client.post.getPostFull(env.HANDLE)).map(post => post.slug)
  return slugs.map(slug => ({ slug }))
}

async function getImageDimensionByUri(uri: string, useFullSize = false): Promise<{ width: number, height: number, uri: string } | null> {
  const headers: Record<string, string> = {}

  if (!useFullSize)
    headers.Range = 'bytes=0-10240'

  try {
    const response = await fetch(uri, { headers })
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const dimensions = sizeOf(buffer)
    if (!(dimensions.width && dimensions.height))
      throw new Error('Could not determine image dimensions.')

    return {
      width: dimensions.width,
      height: dimensions.height,
      uri,
    }
  }
  catch {
    if (!useFullSize)
      return getImageDimensionByUri(uri, true)

    return null
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const [post, site] = await Promise.all([
    client.post.getPostBySlug(env.HANDLE, params.slug),
    client.site.getSiteInfo(env.HANDLE),
  ])
  if (!post)
    return null

  const comments = await client.comment.getCommentFull(env.HANDLE, post.noteId)
  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert">
      <article>
        <h1>{post.title}</h1>
        <div className="flex flex-wrap gap-4 items-center mb-6">
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
          <AppLink
            href={`${site.xlogUrl}/${params.slug}`}
          >
            View on xLog
          </AppLink>
        </div>
        <MDXRemote
          source={post.content}
          components={{
            'img': async (props) => {
              if (!props.src)
                return null

              const size = await getImageDimensionByUri(props.src)
              if (!size)
                // eslint-disable-next-line @next/next/no-img-element
                return <img {...props} />
              return (
                <Image
                  style={{ width: '100%', height: 'auto' }}
                  width={size.width}
                  height={size.height}
                  {...(props as ImageProps)}
                />
              )
            },
            'tweet': ({ id }: { id: string }) => <div className="not-prose"><Tweet id={id} /></div>,
            'github-repo': ({ repo }: { repo: string }) => (
              <AppLink href={`https://github.com/${repo}`}>
                <Image
                  src={`https://socialify.git.ci/${repo}/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto`}
                  alt={`Social preview for ${repo}`}
                  width="1280"
                  height="640"
                />
              </AppLink>
            ),
          }}
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
                [rehypeEmbed, { transformers }],
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
        <span className="i-lucide-eye text-sm" />
        <span className="text-lg">{interaction.views}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="i-lucide-thumbs-up text-sm" />
        <span className="text-lg">{interaction.likes}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="i-lucide-circle-dollar-sign text-sm" />
        <span className="text-lg">{interaction.tips}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="i-lucide-message-circle text-sm" />
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
