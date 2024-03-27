<!-- 
	YOU CAN DELETE EVERYTHING IN THIS PAGE EXCEPT 
	-	<Toaster /> 
-->
<script lang="ts">
	import { account } from '$lib/web3modal';
	import { Toaster } from 'svelte-french-toast';
	import Network from '../partials/Network.svelte';
	import SignMessage from '../partials/SignMessage.svelte';
	import SignTypeData from '../partials/SignTypeData.svelte';
	import Transaction from '../partials/Transaction.svelte';
	import Wallet from '../partials/Wallet.svelte';
	import CustomForm from '../partials/CustomForm.svelte';
</script>

<div class="grid grid-cols-2 pt-20 md:pt-40">
	<div class="grid-cols-1">
		<div class="container h-full mx-auto flex justify-center items-center">
			<div class="space-y-5 text-center flex flex-col items-center">
				<h2 class="h2">Welcome to SkeleKit-WagmiConnect.</h2>
				<div class="text-sm space-x-6">
					<p>
						SkeleKit-WagmiConnect is a template application for developing Web3 Applications with
						Sveltekit.
					</p>
					<p>
						SkeleKit-WagmiConnect is the lovechild of the 'create-skeleton-app' and the demo example
						provided by WalletConnect.
					</p>
					<p>
						I got so tired of not having a decent baseplate for starting web3 applications with my
						favorite technologies, so I made it. You're welcome.
					</p>
				</div>
				<div class="text-sm space-x-6">
					<p>
						Clone this repo <span class="text-md font-bold text-primary-300">
							git clone https://github.com/Elliott-Green/skelekit-wagmiconnect.git</span
						>
					</p>

					<p>
						Run the site locally <span class="text-md font-bold text-primary-300">
							pnpm i && pnpm run dev</span
						>
					</p>
					<p>
						Test production build <span class="text-md font-bold text-primary-300">
							pnpm run build && pnpm run preview</span
						>
					</p>
					<p>
						Lint format and style check the site <span class="text-md font-bold text-primary-300">
							pnpm run lint && pnpm run format && pnpm run check</span
						>
					</p>
					<p>
						Build, start, stop and remove docker images <span
							class="text-md font-bold text-primary-300"
						>
							pnpm run docker:build && pnpm run docker:run && pnpm run docker:stop && pnpm run
							docker:remove</span
						>
					</p>
				</div>
				<figure>
					<div class="grid grid-cols-2 gap-x-2">
						<div class="flex justify-center space-x-2">
							<a
								class="btn variant-filled"
								href="https://skeleton.dev/"
								target="_blank"
								rel="noreferrer"
							>
								Skeleton.dev Documentation
							</a>
						</div>
						<div class="flex justify-center space-x-2">
							<a
								class="btn variant-filled"
								href="https://docs.walletconnect.com/web3modal/javascript/actions"
								target="_blank"
								rel="noreferrer"
							>
								WalletConnect Documentation
							</a>
						</div>
					</div>
					<div class="grid grid-cols-3 gap-x-2 pt-6">
						<div class="flex justify-center space-x-2">
							<a
								class="btn variant-filled"
								href="https://tailwindcss.com/"
								target="_blank"
								rel="noreferrer"
							>
								TailwindCSS Documentation
							</a>
						</div>
						<div class="flex justify-center space-x-2">
							<a
								class="btn variant-filled"
								href="https://wagmi.sh/core/api/actions"
								target="_blank"
								rel="noreferrer"
							>
								WAGMI Documentation
							</a>
						</div>

						<div class="flex justify-center space-x-2">
							<a
								class="btn variant-filled"
								href="https://docs.walletconnect.com/getting-started"
								target="_blank"
								rel="noreferrer"
							>
								Sveltekit Documentation
							</a>
						</div>
					</div>
				</figure>

				<div class="space-y-2">
					<p>Try editing the following:</p>
					<p><code class="code">/src/routes/+layout.svelte</code></p>
					<p><code class="code">/src/routes/+page.svelte</code></p>
				</div>
			</div>
		</div>
	</div>

	{#if $account.isConnected}
		<div class="grid grid-cols-3 gap-6 text-center">
			<div class="col-span-3">
				<Network />
			</div>
			<!-- Extra wallet metadata available when present
			<div class="col-span-3">
				<Wallet />
			</div> 
			-->
			<div class="col-span-1"><SignMessage /></div>
			<div class="col-span-1"><SignTypeData /></div>
			<div class="col-span-1"><Transaction /></div>
		</div>
	{:else}
		<CustomForm />
	{/if}
</div>

<Toaster />
