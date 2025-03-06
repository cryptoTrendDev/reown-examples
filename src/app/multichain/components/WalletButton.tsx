"use client";

import { useAppKit, useAppKitAccount, useAppKitState } from "@reown/appkit/react";
import { truncate } from "lodash";
import { useEffect, useState } from "react";

export default function WalletButton() {
  const { address, status } = useAppKitAccount();
  const appKitState = useAppKitState();
  const appKit = useAppKit();

  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted || !appKitState.initialized || status === "connecting" || status === "reconnecting") {
    return <button className="btn">Loading...</button>;
  }

  if (!address) {
    return (
      <button className="btn" onClick={() => appKit.open({ view: "Connect" })}>
        Custom Connect Wallet
      </button>
    );
  }

  return (
    <button className="btn flex items-center gap-2" onClick={() => appKit.open({ view: "Account" })}>
      <wui-avatar address={address} size="sm" />
      {truncate(address, { length: 16 })}
    </button>
  );
}
