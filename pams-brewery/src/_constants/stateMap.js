const beerState = {
  allBeers: {}, // Each key is the id of a beer, the value is the beer itself
  foundBeersFromSearch: [],
  randomBeer: undefined,
  nameValueForSearch: undefined,
  shouldFetchBeers: false,
  shouldGetRandomBeer: false,
  shouldSearchForBeerByName: false,
};

const userState = {
  likedBeers: {}, // Each key is the id of a beer, the value is the beer itself
  beerToLike: undefined,
  beerToDislike: undefined,
};

const generateInitialState = () => {
  const stateMap = {
    ...beerState,
    ...userState,
  };

  return stateMap;
};

export default generateInitialState;
