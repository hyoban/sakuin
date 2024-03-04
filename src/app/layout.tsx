import './globals.css'

import { env } from '../env'
import { getSiteInfo } from '../lib/storage'

export async function RootLayout({ children }: React.PropsWithChildren) {
  const { siteName, description, icon, banner } = await getSiteInfo(env.HANDLE)

  return (
    <html lang="en" className="dark:bg-neutral-900 dark:text-white">
      <title>{siteName}</title>
      <meta name="description" content={description} />
      {icon && <link rel="icon" type="image/png" href={icon} />}
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#171717" />
      <meta property="og:title" content={siteName} />
      <meta name="twitter:title" content={siteName} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      {banner && (
        <>
          <meta property="og:image" content={banner} />
          <meta name="twitter:image" content={banner} />
        </>
      )}
      <body>{children}</body>
    </html>
  )
}
