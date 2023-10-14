import CataloguePage from '../components/CataloguePage';
import AdventurePage from '../components/AdventurePage';
import FavoritesPage from '../components/FavoritesPage';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';

const routesStructure = {
  home: {
    path: '/',
    element: <Home />,
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
