const beerState = {
  allBeers: [],
  randomBeer: undefined,
  shouldFetchBeers: false,
  shouldGetRandomBeer: false,
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
