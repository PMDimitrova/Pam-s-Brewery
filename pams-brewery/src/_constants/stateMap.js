const beerState = {
  allBeers: [],
  randomBeer: undefined,
  foundBeersFromSearch: [],
  nameValueForSearch: undefined,
  shouldFetchBeers: false,
  shouldGetRandomBeer: false,
  shouldSearchForBeerByName: false,
};

const userState = {
  likedBeers: [],
};

const generateInitialState = () => {
  const stateMap = {
    ...beerState,
    ...userState,
  };

  return stateMap;
};

export default generateInitialState;
