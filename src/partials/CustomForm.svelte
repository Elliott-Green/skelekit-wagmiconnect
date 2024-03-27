<!-- THIS FILE CAN BE REMOVED, IT SERVES ONLY TO DEMO BEST PRACTICES -->
<script lang="ts">
	import { CUSTOM_WALLET } from '$lib/constants';
	import { customWallet } from '$lib/web3modal';

	function handleSubmit() {
		localStorage.setItem(CUSTOM_WALLET, JSON.stringify($customWallet));
		location.reload();
	}
</script>

<div class="container h-full justify-center items-center space-y-10 text-center flex flex-col">
	<h2 class="h2">Add a Custom Wallet to Web3Modal.</h2>
	<p>Try signing into a wallet to access:</p>
	<div class="flex space-x-10">
		<p><code class="code">/_personal_sign</code></p>
		<p><code class="code">/_signTypeData_v4</code></p>
		<p><code class="code">/_eth_sendTransaction</code></p>
	</div>
	<form
		on:submit|preventDefault={handleSubmit}
		class="grid grid-cols-2 justify-center max-w-lg gap-6 text-sm pt-4"
	>
		<label class="flex flex-col gap-1 w-full">
			Id
			<input
				name="id"
				type="text"
				bind:value={$customWallet.id}
				class="text-black rounded-md outline-blue bg-gray-200 px-4 py-2 transition duration-300 focus:outline-blue focus:bg-white focus:ring focus:ring-blue-400 focus:border-transparent"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full">
			Name
			<input
				name="name"
				type="text"
				bind:value={$customWallet.name}
				class="text-black rounded-md outline-blue bg-gray-200 px-4 py-2 transition duration-300 focus:outline-blue focus:bg-white focus:ring focus:ring-blue-400 focus:border-transparent"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full">
			Homepage (Optional)
			<input
				name="homepage"
				type="url"
				bind:value={$customWallet.homepage}
				class="text-black rounded-md outline-blue bg-gray-200 px-4 py-2 transition duration-300 focus:outline-blue focus:bg-white focus:ring focus:ring-blue-400 focus:border-transparent"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full">
			Image URL (Optional)
			<input
				name="image_url"
				type="url"
				bind:value={$customWallet.image_url}
				class="text-black rounded-md outline-blue bg-gray-200 px-4 py-2 transition duration-300 focus:outline-blue focus:bg-white focus:ring focus:ring-blue-400 focus:border-transparent"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full">
			Mobile Link (Optional - Deeplink)
			<input
				name="mobile_link"
				type="text"
				bind:value={$customWallet.mobile_link}
				class="text-black rounded-md outline-blue bg-gray-200 px-4 py-2 transition duration-300 focus:outline-blue focus:bg-white focus:ring focus:ring-blue-400 focus:border-transparent"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full">
			Desktop Link (Optional - Deeplink)
			<input
				name="desktop_link"
				type="text"
				bind:value={$customWallet.desktop_link}
				class="text-black rounded-md outline-blue bg-gray-200 px-4 py-2 transition duration-300 focus:outline-blue focus:bg-white focus:ring focus:ring-blue-400 focus:border-transparent"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full">
			Webapp Link (Optional)
			<input
				name="webapp_link"
				type="text"
				bind:value={$customWallet.webapp_link}
				class="text-black rounded-md outline-blue bg-gray-200 px-4 py-2 transition duration-300 focus:outline-blue focus:bg-white focus:ring focus:ring-blue-400 focus:border-transparent"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full">
			App Store (Optional)
			<input
				name="app_store"
				type="url"
				bind:value={$customWallet.app_store}
				class="text-black rounded-md outline-blue bg-gray-200 px-4 py-2 transition duration-300 focus:outline-blue focus:bg-white focus:ring focus:ring-blue-400 focus:border-transparent"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full">
			Play Store (Optional)
			<input
				name="play_store"
				type="url"
				bind:value={$customWallet.play_store}
				class="text-black rounded-md outline-blue bg-gray-200 px-4 py-2 transition duration-300 focus:outline-blue focus:bg-white focus:ring focus:ring-blue-400 focus:border-transparent"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full">
			<button
				type="submit"
				class="btn variant-ghost-primary flex items-center justify-center font-semibold text-base h-full w-full cursor-pointer"
				>Apply</button
			>
		</label>
	</form>
</div>
