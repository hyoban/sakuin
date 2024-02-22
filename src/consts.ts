type Project = {
  title: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    title: 'Tailwind CSS ClassName Highlight',
    description: 'Highlight valid Tailwind CSS class names in your code.',
    link: 'https://github.com/hyoban/tailwindcss-classname-highlight',
  },
  {
    title: 'izon',
    description: 'Find a GitHub repository\'s dependents.',
    link: 'https://github.com/hyoban/izon',
  },
  {
    title: 'unocss-preset-shadcn',
    description: 'Use shadcn ui with UnoCSS',
    link: 'https://github.com/hyoban/unocss-preset-shadcn',
  },
]

type Link = {
  href: string
  title: string
}

export const links: Link[] = [
  {
    href: 'https://hyoban.xlog.app',
    title: 'blog',
  },
  {
    href: 'https://github.com/hyoban',
    title: 'github',
  },
  {
    href: 'https://twitter.com/0xhyoban',
    title: 'tweets',
  },
  {
    href: 'mailto:hi@hyoban.cc',
    title: 'email',
  },
  {
    href: 'https://gist.github.com/hyoban/7943d4c59c43b79d3f8388671437fe11',
    title: 'dotfiles',
  },
]
