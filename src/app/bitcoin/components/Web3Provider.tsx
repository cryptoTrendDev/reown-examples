"use client";

import { createAppKit } from "@reown/appkit/react";
import { PropsWithChildren } from "react";
import { bitcoinAdapter, networks, projectId } from "../config";

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

// 3. Create modal
createAppKit({
  adapters: [bitcoinAdapter],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  networks: networks,
  defaultNetwork: networks[0],
  metadata: metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  themeMode: "light",
});

export default function Web3Provider({ children }: PropsWithChildren) {
  console.log("Bitcoin provider");
  return <>{children}</>;
}
