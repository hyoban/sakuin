import type { PropsWithChildren } from 'react'
import { getEnv } from 'waku'

import { getCharacter, getGitHubProjects, getLatestPostFromXLog } from '../storage'

type ExternalLinkProps = PropsWithChildren<{
  href: string
  className?: string
  title?: string
}>

function ExternalLink({ href, title, className, children }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className={className}
      title={title}
    >
      {children}
    </a>
  )
}

function capitalize(str: string) {
  return str.replaceAll(/\b\w/g, l => l.toUpperCase()).replaceAll('-', ' ')
}

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
            <ExternalLink
              href={project.link}
              key={project.id}
              className="-mx-3 px-3 py-3 flex flex-col font-normal no-underline rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <div className="flex gap-2">
                <span>{capitalize(project.name)}</span>
                <span className="opacity-70 text-xs">
                  {project.stars}
                  {' '}
                  stars
                </span>
              </div>
              <span className="opacity-70 mt-1">{project.description}</span>
            </ExternalLink>
          ))}
        </section>
      )}
      {
        latestBlogList.length > 0 && (
          <section>
            <h3>Latest Blog</h3>
            {latestBlogList.map(blog => (
              <ExternalLink
                href={blog.link}
                key={blog.link}
                className="-mx-3 px-3 py-3 flex flex-col font-normal no-underline rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <div className="flex gap-2">
                  <span>{blog.title}</span>
                  <span className="opacity-70 text-xs">
                    {blog.views}
                    {' '}
                    views
                  </span>
                </div>
                <span className="opacity-70 mt-1">{blog.date.slice(0, 10)}</span>
              </ExternalLink>
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
