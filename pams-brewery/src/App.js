import { useRoutes } from 'react-router-dom';

import Header from './components/header/Header';
import routesMap from './_constants/routesMap';

const App = () => {
  const content = useRoutes(routesMap);

  return (
    <div>
      <Header />
      {content}
    </div>
  );
};

export default App;
