import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { languages } from './lib/storage'

export const env = createEnv({
  server: {
    HANDLE: z.string(),
    SITE_URL: z.string().optional(),
    LANGUAGE: z.enum(languages).optional().default('zh'),
  },
  client: {},
  experimental__runtimeEnv: {},
  emptyStringAsUndefined: true,
})
