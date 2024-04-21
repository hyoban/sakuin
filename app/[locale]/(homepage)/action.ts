"use server";

import { env } from "../../../env";
import { client } from "../../../lib/client";
import { getImageDimensionByUri } from "../utils";

export async function fetchMorePost(cursor: string | null) {
  const { list: morePosts, cursor: nextCursor } = await client.post.getMany(
    env.HANDLE,
    {
      cursor: cursor ?? undefined,
    },
  );
  const morePostsWithCoverSize = await Promise.all(
    morePosts.map(async (post) => {
      if (!post.cover) return { ...post, coverSize: null };

      const size = await getImageDimensionByUri(post.cover);
      return {
        ...post,
        coverSize: size,
      };
    }),
  );

  return {
    posts: morePostsWithCoverSize,
    cursor: nextCursor,
  };
}
