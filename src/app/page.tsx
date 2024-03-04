import { env } from '../env'
import { getUniverseLinks } from '../lib/other'
import { capitalize, getGitHubProjects, getLatestPostFromXLog, getPodcasts, getSiteInfo } from '../lib/storage'
import { ExternalLink } from './external-link'
import { ListItem } from './list-item'

export async function HomePage() {
  const [
    siteInfo,
    latestBlogList,
    projects,
    podcasts,
  ] = await Promise.all([
    getSiteInfo(env.HANDLE),
    getLatestPostFromXLog(env.HANDLE),
    getGitHubProjects(env.HANDLE),
    getPodcasts(env.HANDLE),
  ])

  const links = getUniverseLinks(
    siteInfo.socialPlatforms,
    siteInfo.navigation,
    siteInfo.blogUrl,
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
              key={project.id}
              title={capitalize(project.name)}
              description={project.description}
              superscript={`${project.stars} stars`}
              link={project.link}
            />
          ))}
        </section>
      )}
      {latestBlogList.length > 0 && (
        <section>
          <h3>Latest Blog</h3>
          {latestBlogList.map(blog => (
            <ListItem
              key={blog.link}
              title={blog.title ?? ''}
              description={blog.date?.slice(0, 10) ?? ''}
              superscript={`${blog.views} views`}
              link={blog.link}
            />
          ))}
        </section>
      )}
      {
        podcasts.length > 0 && (
          <section>
            <h3>Podcasts</h3>
            {podcasts.map(podcast => (
              <ListItem
                key={podcast.link}
                title={podcast.title ?? ''}
                description={podcast.date?.slice(0, 10) ?? ''}
                link={podcast.link ?? ''}
              />
            ))}
          </section>
        )
      }
      {links.length > 0 && (
        <section>
          <h3>Links</h3>
          <div className="flex gap-4 items-center">
            {links.map(link => (
              <ExternalLink
                href={link.href}
                key={link.href}
                className={link.icon}
                title={link.title}
              >
                {link.title}
              </ExternalLink>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
