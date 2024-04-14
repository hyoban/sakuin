import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { languages } from "./src";

export const env = createEnv({
	server: {
		HANDLE: z.string().default("hyoban"),
		SITE_URL: z.string().optional(),
		LANGUAGE: z.enum(languages).optional().default("zh"),
	},
	client: {},
	experimental__runtimeEnv: {},
	emptyStringAsUndefined: true,
});
