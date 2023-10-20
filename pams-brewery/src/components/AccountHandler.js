import { useStoreMe, setStoreMe } from 'store-me';
import { useEffect } from 'react';

import transformAllBeers from '../utils/transformAllBeers';
import apiServices from '../services/apiServices';
import hashing from '../utils/hashing';

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
    shouldCheckFavoritesForChange,
  } = useStoreMe(
    'allBeers',
    'likedBeers',
    'beerToLike',
    'beerToDislike',
    'shouldFetchBeers',
    'nameValueForSearch',
    'shouldGetRandomBeer',
    'shouldSearchForBeerByName',
    'shouldCheckFavoritesForChange'
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
          .searchForBeerByName(nameValueForSearch)
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

  useEffect(function checkForChangesInFavorites() {
    /*
      The flow of searching for changes would be the following:
        1) make API call with all the ids of the liked beers
        2) take the response with the beers and generate new hashes for each beer
        3) compare the hash of the response with the has of the corresponding beer (by id) in our liked list
        4) if there's difference in the hash, this would mean that there's even a singe char difference in the data of the beer
    */
    if (shouldCheckFavoritesForChange) {
      const idsOfLikedBeers = Object.keys(likedBeers).join('|');

      apiServices
        .searchForBeersByID(idsOfLikedBeers)
        .then(res => {
          res.data.forEach(beer => {
            const beerId = beer.id;
            const currentHash = allBeers[beerId].hashedBeer;
            const receivedBeerHash = hashing(beer);
            const hasBeerChanged = currentHash !== receivedBeerHash;
            const dataOfBeer = allBeers[beerId];
            /* If we need to, we can compare the data of the received beer and the data in our system and change that as well.
            But that's not as per task's requirements */
            const newBeerData = { ...dataOfBeer, hasBeerChanged: true, hashedBeer: receivedBeerHash };

            if (hasBeerChanged) {
              setStoreMe({
                allBeers: { ...allBeers, [beerId]: { ...newBeerData } },
                likedBeers: { ...likedBeers, [beerId]: { ...newBeerData } },
              });
            }
          });
        })
        .catch(err => err);

      setStoreMe({ shouldCheckFavoritesForChange: false });
    }
  }),
    [shouldCheckFavoritesForChange];
};

export default AccountHandler;
