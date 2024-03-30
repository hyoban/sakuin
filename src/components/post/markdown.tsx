import rehypeShiki from '@shikijs/rehype'
import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Tweet } from 'react-tweet'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkGithubAlerts from 'remark-github-alerts'
import remarkParse from 'remark-parse'

import { AppLink } from '../../app/[locale]/external-link'
import { getImageDimensionByUri } from '../../app/[locale]/utils'
import { rehypeEmbed, transformers } from './rehype-embed'

export function Markdown({ content }: { content: string }) {
  return (
    <MDXRemote
      source={content}
      components={{
        'a': AppLink,
        'img': async (props) => {
          if (!props.src)
            return null

          const size = await getImageDimensionByUri(props.src)
          if (!size)
            return <img {...props} />
          return (
            <Image
              width={size.width}
              height={size.height}
              {...(props as ImageProps)}
            />
          )
        },
        'tweet': ({ id }: { id: string }) => <div className="not-prose"><Tweet id={id} /></div>,
        'github-repo': ({ repo }: { repo: string }) => (
          <AppLink href={`https://github.com/${repo}`}>
            <Image
              src={`https://socialify.git.ci/${repo}/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto`}
              alt={`Social preview for ${repo}`}
              width="1280"
              height="640"
            />
          </AppLink>
        ),
      }}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkParse,
            remarkGithubAlerts,
            remarkGfm,
          ],
          rehypePlugins: [
            rehypeRaw,
            [rehypeEmbed, { transformers }],
            [rehypeShiki, { themes: { light: 'vitesse-light', dark: 'vitesse-dark' } }],
          ],
          format: 'md',
        },
      }}
    />
  )
}
