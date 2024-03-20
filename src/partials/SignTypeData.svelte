<!-- THIS FILE CAN BE REMOVED, IT SERVES ONLY TO DEMO BEST PRACTICES -->
<script lang="ts">
	import { signTypedData } from '@wagmi/core';
	import toast from 'svelte-french-toast';
	import { wagmiConfig, chainId } from '$lib/web3modal';

	let signature: string | undefined;
	let label: string = 'Sign Type Data';

	const domain = {
		name: 'Ether Mail',
		version: '1',
		chainId: $chainId,
		verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
	} as const;

	const types = {
		Person: [
			{ name: 'name', type: 'string' },
			{ name: 'wallet', type: 'address' }
		],
		Mail: [
			{ name: 'from', type: 'Person' },
			{ name: 'to', type: 'Person' },
			{ name: 'contents', type: 'string' }
		]
	} as const;

	const message = {
		from: {
			name: 'Cow',
			wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826'
		},
		to: {
			name: 'Bob',
			wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB'
		},
		contents: 'Hello, Bob!'
	} as const;

	async function handleSign() {
		label = 'Signing...';
		signature = '_';

		try {
			const _signature = await signTypedData(wagmiConfig, {
				domain,
				message,
				primaryType: 'Mail',
				types
			});

			//@ts-expect-error Wagmi Type bug
			if (_signature !== 'null') {
				signature = _signature;
				toast.success('Message signed successfully');
			} else {
				toast.error('The signature was rejected');
				signature = '_ signTypeData_v4';
			}
		} catch (error) {
			toast.error((error as Error).message);
			signature = '_ signTypeData_v4';
		} finally {
			label = 'Sign Type Data';
		}
	}
</script>

<div class="card">
	<div>
		{signature ?? '_ signTypeData_v4'}
		<div class="btn variant-ghost-primary" on:click={handleSign}>{label}</div>
	</div>
</div>

<style>
	div {
		width: 230px;
		word-wrap: break-word;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
</style>
