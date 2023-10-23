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

const walletState = {
  shouldConnectToMM: false,
  shouldDisconnectFromMM: false,
};

const generateInitialState = () => {
  const stateMap = {
    ...beerState,
    ...appState,
    ...userState,
    ...walletState,
  };

  return stateMap;
};

export default generateInitialState;
