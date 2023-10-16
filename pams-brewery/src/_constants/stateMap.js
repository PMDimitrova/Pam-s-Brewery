const beerState = {
  allBeers: [],
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
