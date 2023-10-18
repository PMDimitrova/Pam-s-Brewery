import { useStoreMe, setStoreMe } from 'store-me';
import { useEffect } from 'react';

import transformAllBeers from '../transformers/transformAllBeers';
import apiServices from '../services/apiServices';

const AccountHandler = () => {
  const { shouldFetchBeers, nameValueForSearch, shouldGetRandomBeer, shouldSearchForBeerByName } = useStoreMe(
    'shouldFetchBeers',
    'nameValueForSearch',
    'shouldGetRandomBeer',
    'shouldSearchForBeerByName'
  );

  useEffect(
    function loadBeers() {
      if (shouldFetchBeers) {
        apiServices
          .getAllBeers()
          .then(res => {
            const transformedBeers = transformAllBeers(res.data);

            setStoreMe({ allBeers: { ...transformedBeers }, shouldFetchBeers: false });
          })
          .catch(err => err);
      }
    },
    [shouldFetchBeers]
  );

  useEffect(
    function loadRandomBeer() {
      if (shouldGetRandomBeer) {
        apiServices
          .getRandomBeer()
          .then(res => setStoreMe({ randomBeer: res?.data[0], shouldGetRandomBeer: false }))
          .catch(err => err);
      }
    },
    [shouldGetRandomBeer]
  );

  useEffect(
    function searchForBeerByName() {
      if (shouldSearchForBeerByName) {
        apiServices
          .searchForBeer(nameValueForSearch)
          .then(res =>
            setStoreMe({
              foundBeersFromSearch: res?.data,
              shouldSearchForBeerByName: false,
            })
          )
          .catch(err => err);
      }
    },
    [shouldSearchForBeerByName, nameValueForSearch]
  );
};

export default AccountHandler;
