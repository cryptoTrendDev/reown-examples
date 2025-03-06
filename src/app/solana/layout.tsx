import { PropsWithChildren } from "react";
import Web3Provider from "./components/Web3Provider";

export default async function SolanaLayout({ children }: PropsWithChildren) {
  return <Web3Provider>{children}</Web3Provider>;
}
