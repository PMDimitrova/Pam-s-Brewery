import axios from 'axios';

const endpoint = 'https://api.punkapi.com/v2';

const getAllBeers = () => {
  axios
    .get(`${endpoint}/beers`)
    .then(res => res)
    .catch(rej => rej);
};

const getRandomBeer = () => {
  axios
    .get(`${endpoint}/beers/random`)
    .then(res => res)
    .catch(rej => rej);
};

const searchForBeer = beerName => {
  axios
    .get(`${endpoint}/beers`, { params: { beer_name: beerName } })
    .then(res => res)
    .catch(rej => rej);
};

const apiServices = {
  getAllBeers,
  getRandomBeer,
  searchForBeer,
};

export default apiServices;
