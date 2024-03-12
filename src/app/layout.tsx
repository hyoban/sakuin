import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import 'remark-github-alerts/styles/github-colors-light.css'
import 'remark-github-alerts/styles/github-colors-dark-media.css'
import 'remark-github-alerts/styles/github-base.css'

import { getSiteInfo } from 'sakuin'

import { env } from '../env'

export async function RootLayout({ children }: React.PropsWithChildren) {
  const { HANDLE, SITE_URL } = env
  const { siteName, characterName, description, icon, banner } = await getSiteInfo(HANDLE)

  return (
    <html lang="en" className="dark:bg-neutral-900 dark:text-white font-sans">
      <title>{siteName ?? characterName}</title>
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
      {SITE_URL && <meta property="og:url" content={SITE_URL} />}
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
