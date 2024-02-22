import './globals.css'

import type { Metadata, Viewport } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Hyoban',
  description: 'Hyoban\'s personal website',
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark:bg-neutral-900 dark:text-white">
      <body>{children}</body>
    </html>
  )
}
