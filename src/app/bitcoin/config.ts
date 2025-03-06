import { BitcoinAdapter } from "@reown/appkit-adapter-bitcoin";
import { bitcoin } from "@reown/appkit/networks";

// 1. Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694";

export const networks = [bitcoin];

// 2. Set up Bitcoin Adapter
export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
});
