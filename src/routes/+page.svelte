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

<div class="grid grid-cols-2 pt-20">
	<div class="grid-cols-1">
		<div class="container h-full mx-auto flex justify-center items-center">
			<div class="space-y-10 text-center flex flex-col items-center">
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

	<div class="grid-cols-1">
		<div class="main">
			<Network />
			<Wallet />
			{#if $account.isConnected}
				<SignMessage />
				<SignTypeData />
				<Transaction />
			{:else}
				<CustomForm />
			{/if}
		</div>
	</div>
</div>

<Toaster />

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}

	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 30px;
		width: 100%;
		padding: 20px;
	}
</style>
