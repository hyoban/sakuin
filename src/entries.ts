import { createPages } from 'waku'

import { RootLayout } from './app/layout'
import { HomePage } from './app/page'
import { Post } from './app/post'
import { env } from './env'
import { getPostMany } from './lib/storage'

export default createPages(async ({ createPage, createLayout }) => {
  createLayout({
    render: 'static',
    path: '/',
    component: RootLayout,
  })
  createPage({
    render: 'static',
    path: '/',
    component: HomePage,
  })

  // eslint-disable-next-line unicorn/no-await-expression-member
  const slugs = (await getPostMany(env.HANDLE)).map(post => post.slug)

  createPage({
    render: 'static',
    path: '/[slug]',
    staticPaths: slugs,
    component: Post,
  })
})
