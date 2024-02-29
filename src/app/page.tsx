import type { PropsWithChildren } from 'react'
import { Fragment } from 'react'

import { getGitHubProjects, getLatestBlogList, getSiteInfo } from '../storage'

type ExternalLinkProps = PropsWithChildren<{
  href: string
  className?: string
}>

function ExternalLink({ href, className, children }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className={className}
    >
      {children}
    </a>
  )
}

function capitalize(str: string) {
  return str.replaceAll(/\b\w/g, l => l.toUpperCase()).replaceAll('-', ' ')
}

export async function HomePage() {
  const [
    siteInfo,
    latestBlogList,
    projects,
  ] = await Promise.all([
    getSiteInfo(),
    getLatestBlogList(),
    getGitHubProjects(),
  ])

  const links = siteInfo.links

  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert">
      <section>
        <h3>{siteInfo.name}</h3>
        <p>{siteInfo.bio}</p>
      </section>
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
        <ExternalLink
          href="https://github.com/search?o=desc&s=stars&type=repositories&q=user%3Ahyoban+archived%3Afalse"
          className="font-normal mt-4 block text-sm"
        >
          All projects sorted by stars
        </ExternalLink>
      </section>
      <section>
        <h3>Latest Blog</h3>
        {latestBlogList.map(blog => (
          <ExternalLink
            href={blog.link}
            key={blog.link}
            className="-mx-3 px-3 py-3 flex flex-col font-normal no-underline rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            <span>{blog.title}</span>
            <span className="opacity-70 mt-1">{blog.date.slice(0, 10)}</span>
          </ExternalLink>
        ))}
      </section>
      <section>
        <h3>Links</h3>
        <samp>
          {links.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 && ' . '}
              <ExternalLink href={link.href}>{link.title}</ExternalLink>
            </Fragment>
          ))}
        </samp>
      </section>
    </main>
  )
}
