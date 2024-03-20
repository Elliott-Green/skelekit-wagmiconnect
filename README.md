<!-- Improved compatibility of back to top link -->

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# Skelekit-WagmiConnect

A more opinionated, but barebones front end web3 template using some of my favorite technologies.

This repository superceeds my previous frontend learning efforts with Sveltekit [here](https://github.com/Elliott-Green/skelekit-wagmiconnect)

   <img src="./skelekit-wagmiconnect.png" alt="Logo" >

## Virgins of the way

First time using Sveltekit? Check the [SvelteKit docs here](https://kit.svelte.dev/docs/). It's the only frontend framework which doesn't make me want to cry, maybe you'll like it too.

First time using Skeleton/Tailwind? Check the [Tailwind CSS docs here](https://tailwindcss.com/) and the [Skeleton docs here](https://www.skeleton.dev/). Hate writing CSS? Me too! Stop, learn Tailwind. There's lots of component support available online. Skeleton is a pretty nice UI framework for Sveltekit and Tailwind, they've got you covered with theme support and prebuild components.

First time using WalletConnect? Check the [WalletConnect docs here](https://docs.walletconnect.com/web3modal/javascript/actions). Support multiple different wallet types across multiple different networks with mobile support out of the box.

First time using Wagmi? Check out the [Wagmi docs here](https://wagmi.sh/core/api/actions). You get your icecream in two main flavours here, WalletConnect comes with the wagmi flavour, so we inherit using it over 'ethers' because it's easier - feel free to make a fork with this enhancement!

## Commands

### Developing

```bash
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

## Audit

One minor note to mention for the audit to date is this audit report about IP address. Users should be aware that using WalletConnect does actually call into their servers which records your users IP address, developers should be aware of this point.

```bash
pnpm audit
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ NPM IP package incorrectly identifies some private IP  │
│                     │ addresses as public                                    │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ ip                                                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <1.1.9                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.1.9                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ . > @wagmi/connectors@4.1.13 > @metamask/sdk@0.14.3 >  │
│                     │ @metamask/sdk-install-modal-web@0.14.1 >               │
│                     │ react-i18next@13.5.0 > react-native@0.73.3 >           │
│                     │ @react-native-community/cli@12.3.2 >                   │
│                     │ @react-native-community/cli-doctor@12.3.2 > ip@1.1.8   │
│                     │                                                        │
│                     │ . > @wagmi/connectors@4.1.13 > @metamask/sdk@0.14.3 >  │
│                     │ @metamask/sdk-install-modal-web@0.14.1 >               │
│                     │ react-i18next@13.5.0 > react-native@0.73.3 >           │
│                     │ @react-native-community/cli@12.3.2 >                   │
│                     │ @react-native-community/cli-hermes@12.3.2 > ip@1.1.8   │
│                     │                                                        │
│                     │ . > @wagmi/connectors@4.1.13 > @metamask/sdk@0.14.3 >  │
│                     │ @react-native-async-storage/async-storage@1.21.0 >     │
│                     │ react-native@0.73.3 >                                  │
│                     │ @react-native-community/cli@12.3.2 >                   │
│                     │ @react-native-community/cli-doctor@12.3.2 > ip@1.1.8   │
│                     │                                                        │
│                     │ ... Found 20 paths, run `pnpm why ip` for more         │
│                     │ information                                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-78xj-cgh5-2h22      │
└─────────────────────┴────────────────────────────────────────────────────────┘
1 vulnerabilities found
Severity: 1 moderate
```

## Licence

Distributed under the MIT License. See LICENSE.txt for more information.

## Contact

Elliott Green - [@cryptonines](https://twitter.com/cryptonines)

Project Link: [https://github.com/Elliott-Green/skelekit-wagmiconnect](https://github.com/Elliott-Green/skelekit-wagmiconnect)

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
[product-screenshot]: ./skelekit-wagmiconnect.png
