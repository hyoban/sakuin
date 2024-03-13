import 'remark-github-alerts/styles/github-base.css'
import 'remark-github-alerts/styles/github-colors-dark-media.css'
import 'remark-github-alerts/styles/github-colors-light.css'
import './globals.css'

import localFont from 'next/font/local'

import { env } from '../env'
import { client } from '../lib/client'

const snPro = localFont({
  variable: '--font-sans',
  preload: false,
  src: [
    {
      path: '../font/SNPro-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../font/SNPro-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../font/SNPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/SNPro-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../font/SNPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/SNPro-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../font/SNPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/SNPro-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../font/SNPro-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/SNPro-SemiboldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../font/SNPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/SNPro-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const { HANDLE, SITE_URL } = env
  const {
    siteName,
    characterName,
    description,
    icon,
    banner,
    xlogUrl,
    footer,
  } = await client.site.getInfo(HANDLE)
  const title = siteName ?? characterName

  return (
    <html lang="en" className={`dark:bg-neutral-900 dark:text-white ${snPro.variable}`}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {icon && <link rel="icon" type="image/png" href={icon} />}
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#171717" />

      <link rel="alternate" type="application/rss+xml" title={title} href={`${xlogUrl}/feed`} />
      <link rel="alternate" type="application/rss+xml" title={`Comments on ${title}`} href={`${xlogUrl}/feed/comments`} />
      <link rel="alternate" type="application/feed+json" title={title} href={`${xlogUrl}/feed?format=json`} />
      <link rel="alternate" type="application/feed+json" title={`Comments on ${title}`} href={`${xlogUrl}/feed/comments?format=json`} />

      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
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
      <body>
        {children}
        {footer && <footer className="mx-auto max-w-[600px] opacity-80 text-sm my-6 text-center">{footer}</footer>}
      </body>
    </html>
  )
}
