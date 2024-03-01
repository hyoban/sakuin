import './globals.css'

import type { PropsWithChildren } from 'react'
import { getEnv } from 'waku'

import { getCharacter } from '../storage'

export async function RootLayout({ children }: PropsWithChildren) {
  const handle = getEnv('HANDLE')!
  const { bio, avatar, siteName } = await getCharacter(handle)
  return (
    <html lang="en" className="dark:bg-neutral-900 dark:text-white">
      <title>{siteName}</title>
      <meta name="description" content={bio} />
      {avatar && <link rel="icon" type="image/png" href={avatar} />}
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#171717" />
      <body>{children}</body>
    </html>
  )
}
