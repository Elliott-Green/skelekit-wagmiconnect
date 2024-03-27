import { defaultWagmiConfig, createWeb3Modal } from '@web3modal/wagmi';

import { getAccount, getChainId, reconnect, watchAccount, watchChainId } from '@wagmi/core';
import { readable, writable } from 'svelte/store';

import {
	arbitrum,
	aurora,
	avalanche,
	base,
	bsc,
	celo,
	gnosis,
	mainnet,
	optimism,
	polygon,
	zkSync,
	zora,
	goerli,
	ronin,
	saigon
} from 'viem/chains';
import { CUSTOM_WALLET } from './constants';

export const projectId = import.meta.env.VITE_PROJECT_ID;

let storedCustomWallet;
if (typeof window !== 'undefined') {
	storedCustomWallet = localStorage.getItem(CUSTOM_WALLET);
}

const customWallets = storedCustomWallet ? [JSON.parse(storedCustomWallet)] : undefined;

const metadata = {
	name: 'skelekit-wagmiconnect',
	description: 'skelekit-wagmiconnect example',
	url: 'https://skelekit-wagmiconnect.vercel.app/',
	icons: ['https://avatars.githubusercontent.com/u/37784886']
};

export const chains = [
	arbitrum,
	aurora,
	avalanche,
	base,
	bsc,
	celo,
	gnosis,
	mainnet,
	optimism,
	polygon,
	zkSync,
	zora,
	goerli,
	ronin,
	saigon
] as const;

export const wagmiConfig = defaultWagmiConfig({
	chains,
	projectId,
	metadata,
	enableCoinbase: false,
	enableInjected: true
});

reconnect(wagmiConfig);

createWeb3Modal({
	wagmiConfig,
	projectId,
	themeMode: 'dark', // light/dark mode
	themeVariables: {
		//--w3m-font-family
		'--w3m-accent': '#6B7280', // Button colour surface-500
		'--w3m-color-mix': '#1e3a8a', // Modal colour mix primary-300
		'--w3m-color-mix-strength': 50, // Strength of colour
		'--w3m-font-size-master': '8px', // Font size
		'--w3m-border-radius-master': '999px' // border rounding
		// --w3m-z-index
	},
	featuredWalletIds: [],
	enableAnalytics: false,
	customWallets
});

export const chainId = readable(getChainId(wagmiConfig), (set) =>
	watchChainId(wagmiConfig, { onChange: set })
);
export const account = readable(getAccount(wagmiConfig), (set) =>
	watchAccount(wagmiConfig, { onChange: set })
);
export const provider = readable<unknown | undefined>(undefined, (set) =>
	watchAccount(wagmiConfig, {
		onChange: async (account) => {
			if (!account.connector) return set(undefined);
			set(await account.connector?.getProvider());
		}
	})
);

export const customWallet = writable({
	id: undefined,
	name: undefined,
	homepage: undefined,
	image_url: undefined,
	mobile_link: undefined,
	desktop_link: undefined,
	webapp_link: undefined,
	app_store: undefined,
	play_store: undefined
});

export const supported_chains = writable<string[]>([]);
