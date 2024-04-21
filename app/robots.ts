import type { MetadataRoute } from 'next'

import { env } from '../env'

export default function robots(): MetadataRoute.Robots {
  const { SITE_URL } = env
  if (!SITE_URL)
    return { rules: [] }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
