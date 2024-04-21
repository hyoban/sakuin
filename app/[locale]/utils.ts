import sizeOf from "image-size";
import type { Navigation, Portfolio, SocialPlatform } from "sakuin";
import { platforms } from "sakuin";

export function getSuperscript(portfolio: Portfolio) {
  if (portfolio.projectStarsCount)
    return `${portfolio.projectStarsCount} stars`;

  if (portfolio.audioListensCount)
    return `${portfolio.audioListensCount} listens`;

  if (portfolio.commentsCount) return `${portfolio.commentsCount} comments`;

  if (portfolio.videoViewsCount) return `${portfolio.videoViewsCount} views`;

  return "";
}

interface Link {
  href: string;
  title: string;
  icon?: string;
}

export function getUniverseLinks(
  connectedAccounts: SocialPlatform[] = [],
  navigationList: Navigation[] = [],
  xlogUrl = "",
  siteUrl = "",
) {
  return [
    ...connectedAccounts.map((account) => {
      const { platform, id } = account;

      return {
        href: platforms[platform]?.url?.replace("{username}", id),
        title: platforms[platform]?.name.toLocaleLowerCase(),
        icon: platforms[platform]?.icon,
      };
    }),
    ...navigationList
      .filter((nav) => nav.url.startsWith("http") && nav.url !== siteUrl)
      .map((nav) => ({
        href: nav.url,
        title: nav.label.toLowerCase(),
        icon: undefined,
      })),
    {
      href: xlogUrl,
      title: "blog",
      icon: "i-lucide-book",
    },
  ]
    .filter(Boolean)
    .filter((link) => link.href && link.title)
    .sort((a, b) => {
      // icon first
      if (a.icon && !b.icon) return -1;
      if (!a.icon && b.icon) return 1;
      // then title
      return a.title?.localeCompare(b.title ?? "") ?? 0;
    }) as Link[];
}

export function capitalize(str: string) {
  return str.replaceAll(/\b\w/g, (l) => l.toUpperCase()).replaceAll("-", " ");
}

export async function getImageDimensionByUri(
  uri: string,
  useFullSize = false,
): Promise<{ width: number; height: number; uri: string } | null> {
  const headers: Record<string, string> = {};

  if (!useFullSize) headers.Range = "bytes=0-10240";

  try {
    const response = await fetch(uri, { headers });
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const dimensions = sizeOf(buffer);
    if (!(dimensions.width && dimensions.height))
      throw new Error("Could not determine image dimensions.");

    return {
      width: dimensions.width,
      height: dimensions.height,
      uri,
    };
  } catch {
    if (!useFullSize) return getImageDimensionByUri(uri, true);

    return null;
  }
}
