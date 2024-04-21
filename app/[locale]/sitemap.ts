import type { MetadataRoute } from "next";

import { env } from "../../env";
import { client } from "../../lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { HANDLE, SITE_URL } = env;
  if (!SITE_URL) return [];
  const pages = await client.page.getAll(HANDLE);
  const posts = await client.post.getAll(HANDLE);
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/shorts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/portfolios`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...pages.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: new Date(page.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/post/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
