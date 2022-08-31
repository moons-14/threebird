import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  MetamaskConnector,
  Connector,
} from "@/libs/connector";
import { Link, useNavigate } from "react-router-dom";
import detectEthereumProvider from "@metamask/detect-provider";
import { useWeb3 } from "@/hooks";
import { login } from "@/libs/auth";
import {
  RecoilRoot,
} from 'recoil';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { connectWallet, currentChainId } = useWeb3();
  const navigate = useNavigate();
  const progress = async (promise: Promise<unknown>) => {
    try {
      setIsLoading(true);
      await promise;
    } finally {
      setIsLoading(false);
    }
  };
  const connect = (connector: Connector) =>
    login(connectWallet(connector))
      .then(() => navigate("/"))
      .catch(console.error);
  return (
    <RecoilRoot>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => { progress(MetamaskConnector.connect().then(connect)) }}>
            Connect Wallet
          </button>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
