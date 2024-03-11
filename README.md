# Sakuin

You can generate an index site based on your xLog data with Sakuin, and deploy it to Vercel.
All you need to do is click the button below and fill in your `HANDLE` in the environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhyoban%2Fsakuin&env=HANDLE)

Here is a demo site for [diygod](https://diygod.cc).

![demo site for diygod](https://github.com/hyoban/hyoban.cc/assets/38493346/0ccff48f-6679-410b-9288-ae4f4cd0093d)

## SDK usage

<!-- automd:pm-install name="sakuin" -->

```sh
# ✨ Auto-detect
npx nypm install sakuin

# npm
npm install sakuin

# yarn
yarn add sakuin

# pnpm
pnpm install sakuin

# bun
bun install sakuin
```

<!-- /automd -->

<!-- automd:jsimport name="sakuin" imports="getPortfolio,getPortfolioFull,getPortfolioMany,getPost,getPostBySlug,getPostFull,getPostMany,getSiteInfo" -->

**ESM** (Node.js, Bun)

```js
import {
  getPortfolio,
  getPortfolioFull,
  getPortfolioMany,
  getPost,
  getPostBySlug,
  getPostFull,
  getPostMany,
  getSiteInfo,
} from "sakuin";
```

<!-- /automd -->

Most of functions take a `HANDLE` as the first argument, and return what you need to build your site.

## See also

- [waku](https://waku.gg) The minimal React framework
- [xLog](https://xlog.app) An open-source creative community written on the blockchain.
