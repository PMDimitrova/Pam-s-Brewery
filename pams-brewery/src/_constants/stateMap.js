const beerState = {
  allBeers: {}, // Each key is the id of a beer, the value is the beer itself
  foundBeersFromSearch: [],
  randomBeer: undefined,
};

const appState = {
  shouldFetchBeers: false,
  shouldGetRandomBeer: false,
  shouldSearchForBeerByName: false,
  shouldCheckFavoritesForChange: false,
  nameValueForSearch: undefined,
};

const userState = {
  likedBeers: {}, // Each key is the id of a beer, the value is the beer itself
  beerToLike: undefined,
  beerToDislike: undefined,
};

const generateInitialState = () => {
  const stateMap = {
    ...beerState,
    ...appState,
    ...userState,
  };

  return stateMap;
};

export default generateInitialState;
