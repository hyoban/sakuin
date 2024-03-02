import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    HANDLE: z.string(),
    SITE_URL: z.string().optional(),
  },
  clientPrefix: 'WAKU_PUBLIC_',
  client: {},
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
