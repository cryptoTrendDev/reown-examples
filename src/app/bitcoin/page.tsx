import Link from "next/link";
import React from "react";
import WalletButton from "./components/WalletButton";

export default function MultichainPage() {
  return (
    <div className="py-10 flex flex-col items-center">
      <div className="mb-6">
        <Link href={"/"} className="cursor-pointer hover:text-blue-500 font-semibold">
          Back
        </Link>
      </div>
      <h1 className="text-center font-semibold text-5xl">Reown - AppKit Bitcoin</h1>
      <a
        href="https://docs.reown.com/appkit/next/core/installation?platform=bitcoin"
        target="_blank"
        rel="noreferrer noopener"
        className="mt-4 text-center hover:text-blue-500 font-semibold"
      >
        View Docs
      </a>
      <div className="space-y-4 mt-10">
        <appkit-button />
        <WalletButton />
      </div>
    </div>
  );
}
