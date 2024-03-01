export type Character = {
  characterId: number
  handle: string
  primary: boolean
  uri: string
  socialToken: string
  operator: string
  owner: string
  fromAddress: string
  createdAt: string
  updatedAt: string
  deletedAt: unknown
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
  bio: string
  name: string
  type: string
  avatars: string[]
  banners: Banner[]
  websites: string[]
  attributes: Attribute[]
  connected_accounts: string[]
}

export type Banner = {
  address: string
  mime_type: string
}

export type Attribute = {
  value: string
  trait_type: string
}
