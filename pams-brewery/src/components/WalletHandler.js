import { InjectedConnector } from 'wagmi/connectors/injected';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useStoreMe, setStoreMe } from 'store-me';
import { useEffect } from 'react';

const WalletHandler = () => {
  const { shouldConnectToMM, shouldDisconnectFromMM } = useStoreMe('shouldConnectToMM', 'shouldDisconnectFromMM');
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const MetaMaskConnector = connectors[0];

  useEffect(
    function connectToMetaMaskWallet() {
      if (shouldConnectToMM && !isConnected) {
        connect({ MetaMaskConnector });
        setStoreMe({ shouldConnectToMM: false });
      }
    },
    [shouldConnectToMM, isConnected, MetaMaskConnector, connect]
  );

  useEffect(
    function disconnectFromMMWallet() {
      if (shouldDisconnectFromMM && isConnected) {
        disconnect();
        setStoreMe({ shouldDisconnectFromMM: false });
      }
    },
    [shouldDisconnectFromMM, isConnected, disconnect]
  );
};

export default WalletHandler;
