import rehypeShiki from '@shikijs/rehype'
import rehypeStringify from 'rehype-stringify'
import remarkGithubAlerts from 'remark-github-alerts'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import { env } from '../env'
import { getPostBySlug } from '../lib/storage'

export async function Post({ slug }: { slug: string }) {
  const post = await getPostBySlug(env.HANDLE, slug)
  const postContent = await unified()
    .use(remarkParse)
    .use(remarkGithubAlerts)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeShiki, {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(`# ${post?.title}\n${post?.content}`)
  return (
    // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml
    <main
      className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: String(postContent) }}
    />
  )
}
