import { Provider, useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";

export default function useWeb3() {
  const account = useAppKitAccount();
  const { walletProvider } = useAppKitProvider<Provider>("eip155");

  return {
    ...account,
    provider: walletProvider,
  };
}
