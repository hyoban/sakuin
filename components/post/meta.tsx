import { AppLink } from '../../app/external-link'
import { env } from '../../env'
import { client } from '../../lib/client'
import { AppearanceSwitch } from '../appearance-switch'
import { InteractionView } from './interaction'

export async function PostMeta({
  slug,
  isPost,
}: {
  slug: string,
  isPost?: boolean,
}) {
  const { HANDLE } = env
  const [post, site] = await Promise.all([
    isPost
      ? client.post.getBySlug(HANDLE, slug)
      : client.page.getBySlug(HANDLE, slug),
    client.site.getInfo(HANDLE),
  ])
  if (!post)
    return null

  return (
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
        <span key={tag}>{`# ${tag}`}</span>
      ))}
      <AppLink href={`${site.xlogUrl}/${slug}`}>View on xLog</AppLink>
      <AppearanceSwitch className="hidden" />
    </div>
  )
}

export async function PageMeta({
  slug,
  isPost,
}: {
  slug: string,
  isPost?: boolean,
}) {
  const { HANDLE, SITE_URL } = env
  const [post, site] = await Promise.all([
    isPost
      ? client.post.getBySlug(HANDLE, slug)
      : client.page.getBySlug(HANDLE, slug),
    client.site.getInfo(HANDLE),
  ])
  if (!post)
    return null

  const { siteName, characterName } = site
  const { cover, summary } = post

  const siteTitle = siteName ?? characterName
  const title = post.title + (siteTitle ? ` - ${siteTitle}` : '')

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={summary} />
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
    </>
  )
}
