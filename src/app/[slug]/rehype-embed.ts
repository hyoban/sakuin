import type { Root } from 'hast'
import { fromHtml } from 'hast-util-from-html'
import { match } from 'path-to-regexp'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

export type Transformer = {
  name: string
  shouldTransform: (url: URL) => boolean
  getHTML: (url: URL) => string | undefined
}

export function isHostIncludes(domain: string, host: string) {
  return [domain, `www.${domain}`].includes(host)
}

export const TweetTransformer: Transformer = {
  name: 'Tweet',
  shouldTransform(url) {
    const { host, pathname } = url

    return (
      (isHostIncludes('twitter.com', host) || isHostIncludes('x.com', host))
      && pathname.includes('/status/')
    )
  },
  getHTML(url) {
    const { pathname } = url
    const matched = match<{ id: string }>('/:user/status/:id')(pathname)
    if (!matched)
      return
    return `<tweet id="${matched.params.id}" fullUrl="${url.toString()}" />`
  },
}

export const rehypeEmbed: Plugin<
  Array<{ transformers: Transformer[] }>,
  Root
>
  = ({ transformers }) =>
    (tree: Root) => {
      visit(tree, { tagName: 'a' }, (node, i, parent) => {
        if (
          !parent
          || !('tagName' in parent)
          || parent.tagName !== 'p'
          || parent.children.length > 1
          // @ts-expect-error FIXME:
          || (node.children[0])?.value !== node.properties.href
        )
          return

        const { href } = node.properties

        if (typeof href === 'string') {
          let url
          try {
            url = new URL(href)
          }
          catch { /* empty */ }
          if (!url)
            return
          for (const transformer of transformers) {
            if (transformer.shouldTransform(url)) {
              const html = transformer.getHTML(url)?.trim()
              if (!html)
                return
              const hast = fromHtml(html, { fragment: true }).children[0]
              Object.assign(parent, hast)
            }
          }
        }
      })
    }
