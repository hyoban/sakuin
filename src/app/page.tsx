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

function ExternalLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
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
    <main className="mx-auto my-12 max-w-[692px] px-6 antialiased sm:my-32 md:my-16 prose prose-neutral dark:prose-invert">
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
            className="-mx-3 px-3 flex flex-col rounded-md no-underline hover:bg-[#F5F4F4] dark:hover:bg-gray-200 sm:py-3 font-normal"
          >
            <span>{project.title}</span>
            <span className="opacity-70 mt-1">{project.description}</span>
          </ExternalLink>
        ))}
      </section>
      <section>
        <h3>Links</h3>
        <samp>
          {links.map((link, index) => (
            <span key={link.href}>
              {index > 0 && " . "}
              <ExternalLink href={link.href}>{link.title}</ExternalLink>
            </span>
          ))}
        </samp>
      </section>
    </main>
  )
}
