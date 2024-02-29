export type SiteInfo = {
  bio: string
  name: string
  type: string
  avatars: string[]
  banners: unknown[]
  attributes: Attribute[]
  connected_accounts: string[]
}

export type UnghResponse = {
  repo: Repo
}

export type Repo = {
  id: number
  name: string
  repo: string
  description: string
  createdAt: string
  updatedAt: string
  pushedAt: string
  stars: number
  watchers: number
  forks: number
  defaultBranch: string
}

export type CrossbellAPIResponse = {
  list: List[]
  count: number
  cursor: string
}

export type List = {
  characterId: number
  noteId: number
  linkItemType: unknown
  linkKey: string
  deleted: boolean
  locked: boolean
  contractAddress: string
  uri: string
  operator: string
  owner: string
  createdAt: string
  updatedAt: string
  deletedAt: unknown
  publishedAt: string
  transactionHash: string
  blockNumber: number
  logIndex: number
  updatedTransactionHash: string
  updatedBlockNumber: number
  updatedLogIndex: number
  metadata: Metadata
}

export type Metadata = {
  uri: string
  type: string
  content: Content
  status: string
}

export type Content = {
  tags: string[]
  type: string
  title: string
  content: string
  sources: string[]
  summary: string
  attributes: Attribute[]
  attachments: Attachment[]
  date_published: string
  external_urls: string[]
}

export type Attribute = {
  value: unknown
  trait_type: string
}

export type Attachment = {
  name: string
  address: string
  mime_type: string
}

export type BlogMeta = {
  uri: string
  create_time: string
  update_time: string
  publish_time: string
  title: string
  tags: string[]
  slug: string
}
