import { CommentClient } from './comment'
import { ClientBase } from './context'
import { PortfolioClient } from './portfolio'
import { PostClient } from './post'
import { SiteClient } from './site'

export { platforms } from './platforms'
export * from './types'

export class Client extends ClientBase {
  site = new SiteClient(this)
  portfolio = new PortfolioClient(this)
  post = new PostClient(this)
  comment = new CommentClient(this, this.site)
}
