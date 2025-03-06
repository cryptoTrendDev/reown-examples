import { useAppKitConnection } from "@reown/appkit-adapter-solana/react";
import { Provider, useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";

export function useEvmWeb3() {
  const namespace = "eip155";
  const account = useAppKitAccount({ namespace });
  const { walletProvider } = useAppKitProvider<Provider>(namespace);

  return {
    ...account,
    provider: walletProvider,
  };
}

export function useSolanaWeb3() {
  const namespace = "solana";
  const account = useAppKitAccount({ namespace });
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>(namespace);

  return {
    ...account,
    connection,
    provider: walletProvider,
  };
}

export function useBitcoinWeb3() {
  const namespace = "bip122";
  const account = useAppKitAccount({ namespace });
  const { walletProvider } = useAppKitProvider<Provider>(namespace);

  return {
    ...account,
    provider: walletProvider,
  };
}
