import Web3ProfilePage from '../components/Web3ProfilePage';
import CataloguePage from '../components/CataloguePage';
import AdventurePage from '../components/AdventurePage';
import FavoritesPage from '../components/FavoritesPage';
import ErrorPage from '../components/ErrorPage';
import HomePage from '../components/HomePage';

const routesStructure = {
  home: {
    path: '/',
    element: <HomePage />,
  },
  catalogue: {
    path: '/catalogue',
    element: <CataloguePage />,
  },
  onAdventure: {
    path: '/on-adventure',
    element: <AdventurePage />,
  },
  favorites: {
    path: '/favorites',
    element: <FavoritesPage />,
  },
  profile: {
    path: '/web3profile',
    element: <Web3ProfilePage />,
  },
  error: {
    path: '*',
    element: <ErrorPage />,
  },
};

const routesMap = Object.keys(routesStructure).map(key => generateRouterStructure(routesStructure[key]));

export default routesMap;

function generateRouterStructure(obj) {
  if (obj.children) {
    const { children, ...rest } = obj;

    return {
      ...rest,
      children: Object.keys(children).map(key => generateRouterStructure(children[key])),
    };
  } else {
    return obj;
  }
}
