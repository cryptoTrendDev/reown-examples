import { useAppKitConnection } from "@reown/appkit-adapter-solana/react";
import { Provider, useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";

export default function useWeb3() {
  const account = useAppKitAccount();
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>("solana");

  return {
    ...account,
    connection,
    provider: walletProvider,
  };
}
