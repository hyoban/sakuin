import rehypeShiki from '@shikijs/rehype'
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
import { getImageDimensionByUri } from '../utils'
import { rehypeEmbed, transformers } from './rehype-embed'

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await client.post.getAll(env.HANDLE)
  const pages = await client.page.getAll(env.HANDLE)
  const slugs = [...posts, ...pages].map(post => post.slug)
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { HANDLE, SITE_URL } = env
  const [post, site] = await Promise.all([
    client.post.getBySlug(HANDLE, params.slug),
    client.site.getInfo(HANDLE),
  ])
  if (!post)
    return null

  const { siteName, characterName } = site
  const { cover, summary } = post

  const siteTitle = siteName ?? characterName
  const title = post.title + (siteTitle ? ` - ${siteTitle}` : '')

  const comments = await client.comment.getAll(env.HANDLE, post.noteId)
  return (
    <>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={summary} />
      <meta property="og:description" content={summary} />
      <meta name="twitter:description" content={summary} />
      <meta name="twitter:card" content="summary_large_image" />
      {SITE_URL && <meta property="og:url" content={SITE_URL} />}
      {cover && (
        <>
          <meta property="og:image" content={cover} />
          <meta name="twitter:image" content={cover} />
        </>
      )}
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
    </>
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
