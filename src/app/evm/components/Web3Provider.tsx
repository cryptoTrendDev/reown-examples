"use client";

import { createAppKit } from "@reown/appkit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";
import { networks, projectId, wagmiAdapter } from "../config";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "appkit-example",
  description: "AppKit Example",
  url: "https://appkitexampleapp.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  networks: networks,
  defaultNetwork: networks[0],
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    // socials: false,
    // email: false,
  },
  themeMode: "light",
});

export default function Web3Provider({ children, cookies }: PropsWithChildren<{ cookies: string | null }>) {
  console.log("EVM provider");
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies);

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
