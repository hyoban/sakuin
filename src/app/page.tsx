import { getPortfolioFull, getPostFull, getSiteInfo } from 'sakuin'

import { env } from '../env'
import { capitalize, getUniverseLinks } from '../lib/other'
import { AppLink } from './external-link'
import { ListItem } from './list-item'

export const revalidate = 3600

export default async function HomePage() {
  const [
    siteInfo,
    latestBlogList,
    portfolios,
  ] = await Promise.all([
    getSiteInfo(env.HANDLE),
    getPostFull(env.HANDLE, { orderBy: 'publishedAt' }),
    getPortfolioFull(env.HANDLE, { orderBy: 'publishedAt' }),
  ])

  const projects = portfolios.filter(p => p.link.startsWith('https://github.com'))
  const podcasts = portfolios.filter(p => p.link.includes('xiaoyuzhoufm.com'))

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
      </section>
      {projects.length > 0 && (
        <section>
          <h3>Projects</h3>
          {projects.map(project => (
            <ListItem
              key={project.noteId}
              title={capitalize(project.title)}
              description={project.summary}
              link={project.link}
              superscript={project.projectStarsCount ? `${project.projectStarsCount} stars` : undefined}
            />
          ))}
        </section>
      )}
      {latestBlogList.length > 0 && (
        <section>
          <h3>Latest Blog</h3>
          {latestBlogList.map(blog => (
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
      {podcasts.length > 0 && (
        <section>
          <h3>Podcasts</h3>
          {podcasts.map(podcast => (
            <ListItem
              key={podcast.link}
              title={podcast.title}
              description={podcast.date.slice(0, 10)}
              link={podcast.link}
              superscript={podcast.audioListensCount ? `${podcast.audioListensCount} listens` : undefined}
            />
          ))}
        </section>
      )}
      {links.length > 0 && (
        <section>
          <h3>Links</h3>
          <div className="flex gap-4 items-center">
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
          </div>
        </section>
      )}
    </main>
  )
}
