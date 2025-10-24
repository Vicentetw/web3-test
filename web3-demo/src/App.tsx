import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>🌈 Web3 Demo con RainbowKit</h1>
      <p>Conectá tu wallet (MetaMask o WalletConnect)</p>
      <ConnectButton />
    </div>
  );
}

export default App;
