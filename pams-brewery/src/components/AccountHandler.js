import { useStoreMe, setStoreMe } from 'store-me';
import { useEffect } from 'react';

import apiServices from '../services/apiServices';

const AccountHandler = () => {
  const { shouldFetchBeers, shouldGetRandomBeer } = useStoreMe('shouldFetchBeers', 'shouldGetRandomBeer');

  useEffect(
    function loadBeers() {
      if (shouldFetchBeers) {
        apiServices
          .getAllBeers()
          .then(res => setStoreMe({ allBeers: res?.data, shouldFetchBeers: false }))
          .catch(err => err);
      }
    },
    [shouldFetchBeers]
  );

  useEffect(
    function loadRandomBeer() {
      if (shouldGetRandomBeer) {
        console.log('asking for new beer in AccountHandler');
        apiServices
          .getRandomBeer()
          .then(res => setStoreMe({ randomBeer: res?.data[0], shouldGetRandomBeer: false }))
          .catch(err => err);
      }
    },
    [shouldGetRandomBeer]
  );
};

export default AccountHandler;
