import { ChainParameter } from "^^@/common/types";
import { useRecoilCallback } from "recoil";

import {
  addressesState,
  connectingChainIdState,
  connectMethodState,
  connectorState,
  signerState,
} from "./atom";

import type { Connector } from "@/libs/connector";
import { logger } from "@/libs/logger";
import { curry, invariant } from "@/utils";

export const useConnectWallet = () => {
  const connectWallet = useRecoilCallback(
    ({ set }) =>
      (connector: Connector) => {
        try {
          logger("connect_wallet", {
            account: connector.getAccounts()[0],
            chainId: connector.getChainId(),
          });
          set(connectorState, connector);
          set(connectMethodState, connector.type);
          connector.on("signerChanged", curry(set, signerState));
          connector.on("accountsChanged", curry(set, addressesState));
          connector.on("chainChanged", curry(set, connectingChainIdState));
          connector.on("disconnect", () => {
            set(signerState, null);
            set(addressesState, []);
            set(connectingChainIdState, null);
          });
          return connector;
        } catch (e) {
          set(connectMethodState, "");
          throw e;
        }
      }
  );
  return connectWallet;
};

export const useSwitchChain = () => {
  const switchChain = useRecoilCallback(
    ({ snapshot }) =>
      async (param: ChainParameter) => {
        const connector = snapshot.getLoadable(connectorState).getValue();
        invariant(connector);
        await connector.switch(param);
        logger("switch_chain", {
          account: connector.getAccounts()[0],
          to: connector.getChainId(),
        });
      }
  );
  return switchChain;
};

export const useDisconnect = () => {
  const disconnect = useRecoilCallback(({ set }) => () => {
    set(signerState, null);
    set(addressesState, []);
    set(connectingChainIdState, null);
  });
  return disconnect;
};
