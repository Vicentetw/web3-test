import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

import App from './App.jsx'
import './index.css'

// Configuración de wagmi + rainbowkit
const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Web3 Demo',
  projectId: 'YOUR_PROJECT_ID', // reemplazalo por un ID de WalletConnect si tenés uno
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
