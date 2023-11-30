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
  isWeb3CheckOFF: true, // this is by default true, so that even if you don't have MetaMask wallet, you can browse see the app
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
