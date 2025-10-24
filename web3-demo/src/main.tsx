import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

import App from './App.jsx'
import './index.css'

// ✅ Configuración de wagmi + rainbowkit
const { chains, publicClient } = configureChains(
  [sepolia], 
  [
    jsonRpcProvider({
      rpc: chain => ({ http: `https://rpc.sepolia.org` }),
    }),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Web3 Demo',
  projectId: 'demo', // todavía no tengo uno
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
