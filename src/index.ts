import { CommentClient } from './comment'
import { ClientBase } from './context'
import { PortfolioClient } from './portfolio'
import { NoteClient } from './post'
import { SiteClient } from './site'

export { platforms } from './platforms'
export * from './types'

export const languages = ['en', 'zh', 'zh-TW', 'ja'] as const
export type Language = (typeof languages)[number]

/**
 * The main client for interacting with the xLog API.
 *
 * @example
 *
 * ```ts
 * import { Client } from 'sakuin'
 * const client = new Client()
 * ```
 */
export class Client extends ClientBase {
  site = new SiteClient(this)
  portfolio = new PortfolioClient(this)
  post = new NoteClient(this, 'post')
  short = new NoteClient(this, 'short')
  page = new NoteClient(this, 'page')
  comment = new CommentClient(this, this.site)
}
