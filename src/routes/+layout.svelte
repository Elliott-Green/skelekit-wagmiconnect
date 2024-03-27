<!-- 
	YOU CAN DELETE EVERYTHING IN THIS PAGE EXCEPT 
	-	<w3m-button>
	IT IS RECOMMENDED YOU UTILISE THE NAVS/APPSHELLS FROM SKELETON TO SLOT INTO
-->
<script lang="ts">
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
