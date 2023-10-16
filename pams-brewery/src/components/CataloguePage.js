import { setStoreMe, useStoreMe } from 'store-me';
import styled from 'styled-components';
import { useEffect } from 'react';

import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import BeerCard from './BeerCard';

const CataloguePage = () => {
  const { allBeers, shouldFetchBeers } = useStoreMe('allBeers', 'shouldFetchBeers');

  useEffect(() => {
    if (!shouldFetchBeers) {
      setStoreMe({ shouldFetchBeers: true });
    }
  }, [shouldFetchBeers]);

  // TODO: add pagination and request for next pages if there's time left

  return (
    <Wrap>
      <Stack spacing={48} alignItems="center">
        <Text text="Catalogue" heading={1} />

        <Stack alignItems="center">
          <Text text="here would be the search field" />
        </Stack>

        <Stack alignItems="center" direction="row" spacing={32} flexWrap="wrap">
          {allBeers.map(beer => (
            <BeerCard beer={beer} marginBottom="48px" key={`${beer.name}-${beer.first_brewed}`} />
          ))}
        </Stack>
      </Stack>
    </Wrap>
  );
};

export default CataloguePage;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 50px 240px;
`;
