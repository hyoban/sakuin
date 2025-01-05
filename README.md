# Sakuin

## Usage

Install dependencies, recommended use [ni](https://github.com/antfu/ni).

```sh
ni sakuin
```

Create a client and use the SDK to get the data you need.
Most functions take `HandleOrCharacterId` and `NoteId` as the arguments.

```ts
import { Client } from "sakuin";

const client = new Client();
const site = = await client.site.getInfo(HANDLE)
```

## Astro Loader

```ts
import { defineCollection } from 'astro:content'
import { postLoader } from 'sakuin/astro'

const posts = defineCollection({
  loader: postLoader({ handle: 'hyoban' }),
})

export const collections = { posts }
```

## See also

- [xLog](https://xlog.app) An open-source creative community written on the blockchain.
- [crossbell.js](https://github.com/Crossbell-Box/crossbell.js) A JavaScript SDK to interact with Crossbell.
