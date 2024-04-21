import createMiddleware from "next-intl/middleware";
import { languages } from "sakuin";

import { env } from "./env";

export default createMiddleware({
  // A list of all locales that are supported
  locales: languages,

  // Used when no locale matches
  defaultLocale: env.LANGUAGE,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|zh|zh-TW|ja)/:path*"],
};
