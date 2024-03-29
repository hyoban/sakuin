// @ts-check
import { fileURLToPath } from 'node:url'

import createJiti from 'jiti'
import createNextIntlPlugin from 'next-intl/plugin'

const jiti = createJiti(fileURLToPath(import.meta.url))

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti('./src/env')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // images: { unoptimized: true },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
