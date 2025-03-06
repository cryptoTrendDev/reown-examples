import { BitcoinAdapter } from "@reown/appkit-adapter-bitcoin";
import { SolanaAdapter } from "@reown/appkit-adapter-solana";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { arbitrum, base, bitcoin, mainnet, polygon, solana, solanaDevnet, solanaTestnet } from "@reown/appkit/networks";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { cookieStorage, createStorage } from "wagmi";

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [mainnet, arbitrum, polygon, base, solana, solanaDevnet, solanaTestnet, bitcoin];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  projectId,
  networks,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

export const solanaWeb3JsAdapter = new SolanaAdapter({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
});

export const config = wagmiAdapter.wagmiConfig;
