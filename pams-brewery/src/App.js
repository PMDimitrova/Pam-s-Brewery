import { useRoutes } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/header/Header';
import routesMap from './_constants/routesMap';

const App = () => {
  const content = useRoutes(routesMap);

  return (
    <Wrap>
      <Header />
      {content}
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  height: 100vh;
`;
