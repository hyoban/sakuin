import './globals.css'

import type { PropsWithChildren } from 'react'

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark:bg-neutral-900 dark:text-white">
      <title>Hyoban</title>
      <meta name="description" content="Hyoban's personal website" />
      <link rel="icon" type="image/png" href="/favicon.svg" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#171717" />
      <body>{children}</body>
    </html>
  )
}
