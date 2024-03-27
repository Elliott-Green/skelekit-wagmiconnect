<!-- 
	YOU CAN DELETE EVERYTHING IN THIS PAGE EXCEPT 
	-	<w3m-button>
	IT IS RECOMMENDED YOU UTILISE THE NAVS/APPSHELLS FROM SKELETON TO SLOT INTO
-->
<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import '../lib/web3modal';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-[12px] md:text-xl md:uppercase">SkeleKit-WagmiConnect</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface hidden md:block"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Skeleton Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface hidden md:block"
					href="https://twitter.com/cryptonines"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface hidden md:block"
					href="https://github.com/Elliott-Green/skelekit-wagmiconnect"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<w3m-button class="" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>

<!--  You can override/fallback on this config per page. -->
<SvelteSeo
	title="skelekit-wagmiconnect | the template"
	description="skelekit-wagmiconnect is a really cool template, star it on github!"
	canonical="https://skelekit-wagmiconnect.vercel.app/"
	keywords="skelekit-wagmiconnect, sveltekit, skeleton.dev, taiwindcss, wagmi, walletconnect, vercel"
	openGraph={{
		title: 'skelekit-wagmiconnect | the template',
		description: 'skelekit-wagmiconnect is a really cool template, star it on github!',
		image: 'https://skelekit-wagmiconnect.vercel.app/skelekit-wagmiconnect.png',
		url: 'https://skelekit-wagmiconnect.vercel.app/',
		type: 'website',
		images: [
			{
				url: 'https://skelekit-wagmiconnect.vercel.app/skelekit-wagmiconnect.png',
				width: 800,
				height: 600,
				alt: 'skelekit-wagmiconnect desktop image'
			},
			{
				url: 'https://skelekit-wagmiconnect.vercel.app/skelekit-wagmiconnect.png',
				width: 900,
				height: 800,
				alt: 'skelekit-wagmiconnect desktop image'
			}
		],
		site_name: 'skelekit-wagmiconnect'
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@cryptonines',
		title: 'skelekit-wagmiconnect | the template',
		description: 'skelekit-wagmiconnect is a really cool template, star it on github!',
		url: 'https://skelekit-wagmiconnect.vercel.app/skelekit-wagmiconnect.png'
	}}
/>
