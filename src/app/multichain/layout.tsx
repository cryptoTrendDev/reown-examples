import React, { PropsWithChildren } from "react";
import Web3Provider from "./components/Web3Provider";
import { headers } from "next/headers";

export default async function MultichainLayout({ children }: PropsWithChildren) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");

  return <Web3Provider cookies={cookies}>{children}</Web3Provider>;
}
