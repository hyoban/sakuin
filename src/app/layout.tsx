import './globals.css'

import type { PropsWithChildren } from 'react'
import { getEnv } from 'waku'

import { getCharacter } from '../storage'

export async function RootLayout({ children }: PropsWithChildren) {
  const handle = getEnv('HANDLE')!
  const { name, bio, avatars } = await getCharacter(handle)
  return (
    <html lang="en" className="dark:bg-neutral-900 dark:text-white">
      <title>{name}</title>
      <meta name="description" content={bio} />
      <link rel="icon" type="image/png" href={avatars.at(0)} />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#171717" />
      <body>{children}</body>
    </html>
  )
}
