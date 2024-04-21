import { Client } from 'sakuin'

export const client = new Client({
  fetchOptions: { next: { revalidate: 3600 } },
})
