import './globals.css'

import { env } from '../env'
import { getCharacter } from '../lib/storage'

export async function RootLayout({ children }: React.PropsWithChildren) {
  const { bio, avatar, siteName } = await getCharacter(env.HANDLE)

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
