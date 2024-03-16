import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    HANDLE: z.string(),
    SITE_URL: z.string().optional(),
    MODE: z.enum(['static', 'dynamic']).optional().default('static'),
  },
  client: {},
  experimental__runtimeEnv: {},
  emptyStringAsUndefined: true,
})
