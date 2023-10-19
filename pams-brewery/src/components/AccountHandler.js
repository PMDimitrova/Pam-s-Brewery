import { useStoreMe, setStoreMe } from 'store-me';
import { useEffect } from 'react';

import transformAllBeers from '../transformers/transformAllBeers';
import apiServices from '../services/apiServices';

const AccountHandler = () => {
  const {
    allBeers,
    likedBeers,
    beerToLike,
    beerToDislike,
    shouldFetchBeers,
    nameValueForSearch,
    shouldGetRandomBeer,
    shouldSearchForBeerByName,
  } = useStoreMe(
    'allBeers',
    'likedBeers',
    'beerToLike',
    'beerToDislike',
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

  useEffect(
    function likeBeer() {
      if (beerToLike) {
        const { id } = beerToLike;
        const likedBeer = { ...beerToLike, isBeerLiked: true };

        setStoreMe({
          likedBeers: { ...likedBeers, [id]: { ...likedBeer } },
          allBeers: { ...allBeers, [id]: { ...likedBeer } },
          beerToLike: undefined,
        });
      }
    },
    [beerToLike, likedBeers, allBeers]
  );

  useEffect(
    function dislikeBeer() {
      if (beerToDislike) {
        const { id } = beerToDislike;
        const dislikedBeer = { ...beerToDislike, isBeerLiked: false };
        const { [id]: idToDislike, ...newLikedBeers } = likedBeers;

        setStoreMe({
          likedBeers: { ...newLikedBeers },
          allBeers: { ...allBeers, [id]: { ...dislikedBeer } },
          beerToDislike: undefined,
        });
      }
    },
    [beerToDislike, likedBeers, allBeers]
  );
};

export default AccountHandler;
