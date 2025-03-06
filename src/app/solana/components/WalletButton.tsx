"use client";

import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { truncate } from "lodash";
import { useEffect, useState } from "react";

export default function WalletButton() {
  const namespace = "solana";
  const { address, status } = useAppKitAccount({ namespace });
  console.log("🚀 ~ WalletButton ~ address, status:", address, status);
  const appKit = useAppKit();

  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted || status === "connecting" || status === "reconnecting") {
    return <button className="btn">Loading...</button>;
  }

  if (status === "disconnected") {
    return (
      <button className="btn" onClick={() => appKit.open({ view: "Connect", namespace })}>
        Custom Connect Wallet
      </button>
    );
  }

  return (
    <button className="btn flex items-center gap-2" onClick={() => appKit.open({ view: "Account", namespace })}>
      <wui-avatar address={address} size="sm" />
      {truncate(address, { length: 16 })}
    </button>
  );
}
