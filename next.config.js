// @ts-check
import { fileURLToPath } from 'node:url'

import createJiti from 'jiti'

const jiti = createJiti(fileURLToPath(import.meta.url))

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti('./env')

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

export default nextConfig
