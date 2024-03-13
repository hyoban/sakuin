# Sakuin

You can generate an index site based on your xLog data with Sakuin, and deploy it to Vercel.
All you need to do is click the button below and fill in your `HANDLE` in the environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhyoban%2Fsakuin&env=HANDLE)

Here is a demo site for [diygod](https://diygod.cc).

![demo site for diygod](https://github.com/hyoban/hyoban.cc/assets/38493346/0ccff48f-6679-410b-9288-ae4f4cd0093d)

## SDK Usage

```sh
ni sakuin
```

```js
import { Client } from "sakuin";

const client = new Client();
const site = = await client.site.getInfo(HANDLE)
```

Most of functions take `HandleOrCharacterId` and `NoteId` as the arguments, and return what you need to build your site.

## See also

- [xLog](https://xlog.app) An open-source creative community written on the blockchain.
