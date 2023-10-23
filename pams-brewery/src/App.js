import { useRoutes } from 'react-router-dom';
import styled from 'styled-components';
import { WagmiConfig } from 'wagmi';

import AccountHandler from './components/AccountHandler';
import WalletHandler from './components/WalletHandler';
import wagmiConfig from './_constants/wagmiConfig';
import Header from './components/header/Header';
import routesMap from './_constants/routesMap';
import colors from './_constants/colors';

const App = () => {
  const content = useRoutes(routesMap);

  return (
    <WagmiConfig config={wagmiConfig}>
      <Wrap $backgroundColor={colors.background}>
        <AccountHandler />
        <WalletHandler />
        <Header />
        {content}
      </Wrap>
    </WagmiConfig>
  );
};

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${props => props.$backgroundColor};
`;
