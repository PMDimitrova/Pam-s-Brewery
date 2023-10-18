import hashing from './hashing';

const transformAllBeers = allBeers => {
  const result = {};

  allBeers.forEach(beer => {
    const { id } = beer;

    /*
      The point to have the whole object of the beer hashed is that
      when we're going to do a comparison between the data we have and the data the API provides us
      even a singe char change will lead to a different hash and there would be no need
      to compare the beer object key by key and value by value
    */
    const hashedBeer = hashing(beer);

    const beerWithHash = { ...beer, hashedBeer, hasBeerChanged: false, isBeerLiked: false };

    result[id] = beerWithHash;
  });

  return result;
};

export default transformAllBeers;
