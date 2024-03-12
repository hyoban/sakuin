// https://github.com/Crossbell-Box/xLog/blob/dev/src/lib/ipfs-parser.ts

export const IPFS_GATEWAY = 'https://ipfs.4everland.xyz/ipfs/'
export const IPFS_PREFIX = 'ipfs://'

export type ToGatewayConfig = {
  needRequestAtServerSide?: boolean
  forceFallback?: boolean
}

export function toGateway(url?: string | URL, customGateway?: string) {
  if (!url)
    return
  const ipfsUrl = typeof url === 'string' ? toIPFS(url) : toIPFS(url.toString())

  return ipfsUrl.replaceAll(IPFS_PREFIX, customGateway || IPFS_GATEWAY)
}

export function toIPFS(url: string) {
  return url
    .replaceAll(IPFS_GATEWAY, IPFS_PREFIX)
    .replaceAll('https://gateway.ipfs.io/ipfs/', IPFS_PREFIX)
    .replaceAll('https://ipfs.io/ipfs/', IPFS_PREFIX)
    .replaceAll('https://cf-ipfs.com/ipfs/', IPFS_PREFIX)
    .replaceAll('https://ipfs.4everland.xyz/ipfs/', IPFS_PREFIX)
    .replaceAll('https://rss3.mypinata.cloud/ipfs/', IPFS_PREFIX)
    .replaceAll('https://cloudflare-ipfs.com/ipfs/', IPFS_PREFIX)
    .replaceAll('https://ipfs.xlog.app/ipfs/', IPFS_PREFIX)
}

export function toCid(url: string) {
  return url
    .replaceAll(IPFS_GATEWAY, '')
    .replaceAll('https://gateway.ipfs.io/ipfs/', '')
    .replaceAll('https://ipfs.io/ipfs/', '')
    .replaceAll('https://cf-ipfs.com/ipfs/', '')
    .replaceAll('https://ipfs.4everland.xyz/ipfs/', '')
    .replaceAll('https://rss3.mypinata.cloud/ipfs/', '')
    .replaceAll('https://cloudflare-ipfs.com/ipfs/', '')
    .replaceAll('https://ipfs.xlog.app/ipfs/', '')
    .replaceAll(IPFS_PREFIX, '')
}
