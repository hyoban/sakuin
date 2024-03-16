// @ts-check

import { fileURLToPath } from 'node:url'

import createJiti from 'jiti'

const jiti = createJiti(fileURLToPath(import.meta.url))

// Import env here to validate during build. Using jiti we can import .ts files :)
const { env } = jiti('./src/env')
// eslint-disable-next-line no-console
console.log('Using mode:', env.MODE)

/** @type {import('next').NextConfig} */
const nextConfig = env.MODE === 'dynamic'
  ? {
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
  : {
      output: 'export',
      images: { unoptimized: true },
    }

export default nextConfig
