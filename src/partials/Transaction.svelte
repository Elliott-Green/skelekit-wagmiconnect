<!-- THIS FILE CAN BE REMOVED, IT SERVES ONLY TO DEMO BEST PRACTICES -->
<script lang="ts">
	import { account, wagmiConfig } from '$lib/web3modal';
	import toast from 'svelte-french-toast';
	import { sendTransaction } from '@wagmi/core';

	let label: string = 'Send Transaction';
	let hash: string;

	async function handleWrite() {
		if (!$account.address) throw Error('Wallet disconnected');
		label = 'Processing...';

		try {
			const _hash = await sendTransaction(wagmiConfig, {
				to: $account.address,
				value: 0n,
				data: '0x48656c6c6f2066726f6d2057616c6c6574436f6e6e656374'
			});

			//@ts-expect-error Wagmi Type bug
			if (_hash !== 'null') {
				hash = 'Hash: ' + _hash;
				toast.success('Message signed successfully');
			} else {
				toast.error('The signature was rejected');
				hash = '';
			}
		} catch (error) {
			toast.error((error as Error).message);
			hash = '';
		} finally {
			label = 'Send Transaction';
		}
	}
</script>

<div class="card py-2">
	<div class="space-y-4">
		<h3 class="text-bold text-md">_eth_sendTransaction</h3>
		<p class="text-left text-sm">Result: <span class="text-sm">{hash ?? ''} </span></p>
		<div class="btn variant-ghost-primary w-full" on:click={handleWrite}>{label}</div>
	</div>
</div>
