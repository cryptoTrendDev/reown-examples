// App.tsx
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaDevnet, solanaTestnet } from "@reown/appkit/networks";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";

// 0. Set up Solana Adapter
export const solanaWeb3JsAdapter = new SolanaAdapter({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

// 1. Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694";

// 2. Define supported networks
export const networks = [solana, solanaDevnet, solanaTestnet];
