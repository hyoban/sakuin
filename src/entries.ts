import { createPages } from 'waku'

import { RootLayout } from './app/layout'
import { HomePage } from './app/page'

// eslint-disable-next-line @typescript-eslint/require-await
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
})
