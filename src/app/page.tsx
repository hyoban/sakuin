import clsx from "clsx"
import { Fragment } from "react"

import type { PropsWithChildren } from "react"

type Project = {
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "Tailwind CSS ClassName Highlight",
    description: "Highlight valid Tailwind CSS class names in your code.",
    link: "https://github.com/hyoban/tailwindcss-classname-highlight",
  },
  {
    title: "izon",
    description: "Find a GitHub repository's dependents.",
    link: "https://github.com/hyoban/izon",
  },
  {
    title: "unocss-preset-shadcn",
    description: "Use shadcn ui with UnoCSS",
    link: "https://github.com/hyoban/unocss-preset-shadcn",
  },
]

type Link = {
  href: string
  title: string
}

const links: Link[] = [
  {
    href: "https://hyoban.xlog.app",
    title: "blog",
  },
  {
    href: "https://github.com/hyoban",
    title: "github",
  },
  {
    href: "https://twitter.com/0xhyoban",
    title: "tweets",
  },
  {
    href: "mailto:hi@hyoban.cc",
    title: "email",
  },
  {
    href: "https://gist.github.com/hyoban/7943d4c59c43b79d3f8388671437fe11",
    title: "dotfiles",
  },
]

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

export default function Home() {
  return (
    <main
      className={clsx(
        "mx-auto max-w-[692px] px-6 my-12 sm:my-32 md:my-16",
        "antialiased",
        "prose prose-neutral dark:prose-invert",
      )}
    >
      <section>
        <h3>Me</h3>
        <p>
          I'm a front-end developer, be good at React & TypeScript. Currently
          I'm studying at NCUT, will graduate in 2024.
        </p>
      </section>
      <section>
        <h3>Projects</h3>
        {projects.map((project) => (
          <ExternalLink
            href={project.link}
            key={project.title}
            className={clsx(
              "-mx-3 px-3 py-3 flex flex-col font-normal no-underline",
              "rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800",
            )}
          >
            <span>{project.title}</span>
            <span className="opacity-70 mt-1">{project.description}</span>
          </ExternalLink>
        ))}
        <ExternalLink
          href="https://github.com/search?l=&o=desc&s=stars&type=Repositories&q=user%3Ahyoban"
          className="font-normal mt-4 block text-sm"
        >
          All projects sorted by stars
        </ExternalLink>
      </section>
      <section>
        <h3>Links</h3>
        <samp>
          {links.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 && " . "}
              <ExternalLink href={link.href}>{link.title}</ExternalLink>
            </Fragment>
          ))}
        </samp>
      </section>
    </main>
  )
}
