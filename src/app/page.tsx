import { getEnv } from 'waku'

import { getCharacter, getGitHubProjects, getLatestPostFromXLog } from '../lib/storage'
import { capitalize } from '../lib/utils'
import { ExternalLink } from './external-link'
import { ListItem } from './list-item'

export async function HomePage() {
  const handle = getEnv('HANDLE')!
  const siteUrl = getEnv('SITE_URL')

  const [
    siteInfo,
    latestBlogList,
    projects,
  ] = await Promise.all([
    getCharacter(handle, siteUrl),
    getLatestPostFromXLog(handle),
    getGitHubProjects(handle),
  ])

  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert">
      <section>
        <h3>{siteInfo.name}</h3>
        <p>{siteInfo.bio}</p>
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
      {
        latestBlogList.length > 0 && (
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
        )
      }
      {siteInfo.links.length > 0 && (
        <section>
          <h3>Links</h3>
          <div className="flex gap-4 items-center">
            {siteInfo.links.map(link => (
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
