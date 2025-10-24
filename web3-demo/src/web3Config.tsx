import '@rainbow-me/rainbowkit/styles.css';
import React from 'react';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// Configuración de chains y provider
const { chains, publicClient } = configureChains(
  [sepolia, mainnet],
  [publicProvider()]
);

// Configuración de wallets
const { connectors } = getDefaultWallets({
  appName: 'Demo Web3',
  chains
});

// Config Wagmi
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      {children}
    </RainbowKitProvider>
  </WagmiConfig>
);
