# Sakuin

You can generate an index site based on your xLog data with Sakuin, and deploy it to Vercel.
All you need to do is click the button below and fill in your `HANDLE` in the environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhyoban%2Fsakuin&env=HANDLE)

Here is a [demo site](https://sakuin-diygod.vercel.app) for [diygod](https://diygod.cc).

## SDK Usage

Install dependencies, recommended use [ni](https://github.com/antfu/ni).

```sh
ni sakuin
```

Create a client and you can use the SDK to get the data you need.
Most of functions take `HandleOrCharacterId` and `NoteId` as the arguments.

```ts
import { Client } from "sakuin";

const client = new Client();
const site = = await client.site.getInfo(HANDLE)
```

For more details, please refer to the [SDK documentation](https://sakuin-docs.vercel.app).

## See also

- [xLog](https://xlog.app) An open-source creative community written on the blockchain.
