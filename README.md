<!-- Improved compatibility of back to top link -->

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# skelekit-wagmiconnect

THIS REPO HAS BEEN DEPRECIATED IN FAVOUR OF THE LATEST VERSIONS OF SVELTEKIT, SKELETON, TAILWIND ETC, FIND IT [HERE](https://github.com/Elliott-Green/sveltekit-reown-ethers)

A more opinionated, but barebones front end sveltekit web3 template using some of my favorite technologies, some might even say the best sveltekit-web3 template.

skelekit-wagmiconnect is the lovechild of the ['create-skeleton-app' command](https://www.skeleton.dev/docs/get-started) and the [demo example provided by WalletConnect](https://evmtest.walletconnect.com/).

Fun fact, [I asked WalletConnect to make the 'wagmiconnect' part of this example](https://github.com/WalletConnect/web-examples/issues/272), thanks WalletConnect, WAGMI!

If you fork this repo and like it, maybe give it a star so other sveltekit devs can see it when they search 'web3 sveltekit'.

<p align="center">
   <img src="./static/skelekit-wagmiconnect.png" alt="skelekit-wagmiconnect desktop" >
</p>

<p align="center">
   <img src="./static/skelekit-wagmiconnect-mobile.png" alt="skelekit-wagmiconnect mobile" width="250" >
   <img src="./static/skelekit-wagmiconnect-mobile-network.png" alt="skelekit-wagmiconnect network"  width="250">
   <img src="./static/skelekit-wagmiconnect-mobile-sign.png" alt="skelekit-wagmiconnect sign" width="250" >
</p>
<p align="center">
   <img src="./static/skelekit-wagmiconnect-lighthouse.png" alt="skelekit-wagmiconnect desktop" >
</p>

## New to the skelekit-wagmiconnect stack?

First time using Sveltekit? Check the [SvelteKit docs here](https://kit.svelte.dev/docs/). It's the only frontend framework which doesn't make me want to cry, maybe you'll like it too.

First time using Skeleton/Tailwind? Check the [Tailwind CSS docs here](https://tailwindcss.com/) and the [Skeleton docs here](https://www.skeleton.dev/). Hate writing CSS? Me too! Stop, learn Tailwind. There's lots of component support available online. Skeleton is a pretty nice UI framework for Sveltekit and Tailwind, they've got you covered with theme support and prebuild components.

First time using WalletConnect? Check the [WalletConnect docs here](https://docs.walletconnect.com/web3modal/javascript/actions). Support multiple different wallet types across multiple different networks with mobile support out of the box.

First time using Wagmi? Check out the [Wagmi docs here](https://wagmi.sh/core/api/actions). You get your icecream in two main flavours here, WalletConnect comes with the wagmi flavour, so we inherit using it over 'ethers' because it's easier - feel free to make a fork with this enhancement!

## Contributions + to-do-list

I welcome any contributors, especially with the following areas. I'll probably add these over time.

- page.svelte layout changes utilising skeleton.dev
  - page layout constistency/best practice changes where appropriate
  - walletconnect modal theme change with skeleton lightswitch possible?
  - hook walletconnect modal colours to skeleton themes?
- overriding walletconnects configuration to default, or skeleton theme'd like data
- docker enhancements
- improvements / bugfixes
- pwa support
  - would this be even a good idea since you'd need to be on the metamask app anyways? potentially on apps that only fetch without wallets?

## Commands

### Developing

```bash
## clone
mkdir skelekit-wagmiconnect
cd skelekit-wagmiconnect
git clone https://github.com/Elliott-Green/skelekit-wagmiconnect.git

## install dependancies
pnpm install

## start dev server
pnpm run dev
```

### Pre commit test build

```bash
## build for production
pnpm run preview
## run production build
pnpm run build
```

### Pre commit lint

```bash
## run html/css/js/ts check
pnpm run check
## run prettier lint check
pnpm run lint
## run prettier lint format
pnpm run format
```

### Docker bros

```bash
## Docker builds image
pnpm run docker:build
## Docker runs image as container
pnpm run docker:run
## Docker stops container
pnpm run docker:stop
## Docker removes the container
pnpm run docker:remove
## Docker removes the image and cache
pnpm run docker:clean
```

## Vercel .envs

Using vercel you can specifiy if envs are inserted into the UI or through a .env.

`VITE_PROJECT_ID` should be set to a [wallet-connect dapp ID](https://cloud.walletconnect.com/) to become available through its 'dapp explorer', else just set it to 1.

## Svelte-SEO

This template comes equipped with Svelte-SEO to make your life easier.

It's available on all pages at `+layout` and override on `+page`'s that you want custom OG SEO data for.

```bash
https://www.opengraph.xyz/url/https%3A%2F%2Fskelekit-wagmiconnect.vercel.app
```

## Micro Audit

Users should be aware that using WalletConnect does actually call into their servers which records your users IP address, developers should be aware of this point.

```bash
pnpm audit
No known vulnerabilities found
```

## Licence

Distributed under the MIT License. See LICENSE.txt for more information.

## Contact

Elliott Green - [@cryptonines](https://twitter.com/cryptonines)

Project Link: [https://github.com/Elliott-Green/skelekit-wagmiconnect](https://github.com/Elliott-Green/skelekit-wagmiconnect)

This repository superceeds my previous opensource Sveltekit web3 UI learning efforts [archived here](https://github.com/Elliott-Green/SveltekitXSkeletonXEthers).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/Elliott-Green/skelekit-wagmiconnect.svg?style=for-the-badge
[contributors-url]: https://github.com/Elliott-Green/skelekit-wagmiconnect/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Elliott-Green/skelekit-wagmiconnect.svg?style=for-the-badge
[forks-url]: https://github.com/Elliott-Green/skelekit-wagmiconnect/network/members
[stars-shield]: https://img.shields.io/github/stars/Elliott-Green/skelekit-wagmiconnect.svg?style=for-the-badge
[stars-url]: https://github.com/Elliott-Green/skelekit-wagmiconnect/stargazers
[issues-shield]: https://img.shields.io/github/issues/Elliott-Green/skelekit-wagmiconnect.svg?style=for-the-badge
[issues-url]: https://github.com/Elliott-Green/skelekit-wagmiconnect/issues
[license-shield]: https://img.shields.io/github/license/Elliott-Green/skelekit-wagmiconnect.svg?style=for-the-badge
[license-url]: https://github.com/Elliott-Green/skelekit-wagmiconnect/blob/main/LICENCE
