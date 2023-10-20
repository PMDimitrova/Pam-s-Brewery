import axios from 'axios';

const endpoint = 'https://api.punkapi.com/v2';

const getAllBeers = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${endpoint}/beers`).then(resolve).catch(reject);
  });
};

const getRandomBeer = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${endpoint}/beers/random`).then(resolve).catch(reject);
  });
};

const searchForBeerByName = nameValueForSearch => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${endpoint}/beers`, { params: { beer_name: nameValueForSearch } })
      .then(resolve)
      .catch(reject);
  });
};

const searchForBeersByID = ids => {
  // Receives multiple ids divided by | as a string
  return new Promise((resolve, reject) => {
    axios.get(`${endpoint}/beers`, { params: { ids } }).then(resolve).catch(reject);
  });
};

const apiServices = {
  getAllBeers,
  getRandomBeer,
  searchForBeerByName,
  searchForBeersByID,
};

export default apiServices;
