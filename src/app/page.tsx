import type { Portfolio } from 'sakuin'
import { getPortfolioFull, getPostFull, getSiteInfo } from 'sakuin'

import { env } from '../env'
import { capitalize, getUniverseLinks } from '../lib/other'
import { AppLink } from './external-link'
import { ListItem } from './list-item'

export const revalidate = 3600

function getSuperscript(portfolio: Portfolio) {
  if (portfolio.projectStarsCount)
    return `${portfolio.projectStarsCount} stars`

  if (portfolio.audioListensCount)
    return `${portfolio.audioListensCount} listens`

  if (portfolio.commentsCount)
    return `${portfolio.commentsCount} comments`

  if (portfolio.videoViewsCount)
    return `${portfolio.videoViewsCount} views`

  return ''
}

export default async function HomePage() {
  const [
    siteInfo,
    posts,
    portfolios,
  ] = await Promise.all([
    getSiteInfo(env.HANDLE),
    getPostFull(env.HANDLE, { orderBy: 'publishedAt' }),
    getPortfolioFull(env.HANDLE, { orderBy: 'publishedAt' }),
  ])

  const links = getUniverseLinks(
    siteInfo.socialPlatforms,
    siteInfo.navigation,
    siteInfo.xlogUrl,
    env.SITE_URL,
  )

  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert">
      <section>
        <h3>{siteInfo.characterName}</h3>
        <p>{siteInfo.description}</p>
        {links.length > 0 && (
          <section className="flex gap-4 items-center">
            {links.map(link => (
              <AppLink
                href={link.href}
                key={link.href}
                className={link.icon}
                title={link.title}
              >
                {link.title}
              </AppLink>
            ))}
          </section>
        )}
      </section>
      {posts.length > 0 && (
        <section>
          <h3>Posts</h3>
          {posts.map(blog => (
            <ListItem
              key={blog.slug}
              title={blog.title}
              description={blog.date.slice(0, 10)}
              superscript={`${blog.views} views`}
              link={blog.slug}
            />
          ))}
        </section>
      )}
      {portfolios.length > 0 && (
        <section>
          <h3>Portfolios</h3>
          {portfolios.map(portfolio => (
            <ListItem
              key={portfolio.noteId}
              title={capitalize(portfolio.title)}
              description={portfolio.summary}
              link={portfolio.link}
              superscript={getSuperscript(portfolio)}
            />
          ))}
        </section>
      )}
    </main>
  )
}
