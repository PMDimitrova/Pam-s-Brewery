import { useRoutes } from 'react-router-dom';
import styled from 'styled-components';

import AccountHandler from './components/AccountHandler';
import Header from './components/header/Header';
import routesMap from './_constants/routesMap';
import colors from './_constants/colors';

const App = () => {
  const content = useRoutes(routesMap);

  return (
    <Wrap $backgroundColor={colors.background}>
      <AccountHandler />
      <Header />
      {content}
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${props => props.$backgroundColor};
`;
