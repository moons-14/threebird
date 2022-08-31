import { useWeb3 } from "@/hooks";
import { login } from "@/libs/auth";
import {
  Connector, MetamaskConnector
} from "@/libs/connector";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const ConnectWallet = () => {
  const { connectWallet, currentChainId } = useWeb3();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
    <button onClick={() => { progress(MetamaskConnector.connect().then(connect)) }}>
      Connect Wallet
    </button>
  );
};
