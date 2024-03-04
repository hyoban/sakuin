export function capitalize(str: string) {
  return str.replaceAll(/\b\w/g, l => l.toUpperCase()).replaceAll('-', ' ')
}

export function convertIpfsUrl(url: string) {
  return url.replaceAll(/ipfs:\/\/([^\n ]+)/g, 'https://ipfs.4everland.xyz/ipfs/' + '$1')
}
