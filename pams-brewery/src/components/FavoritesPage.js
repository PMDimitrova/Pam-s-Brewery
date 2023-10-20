import { setStoreMe, useStoreMe } from 'store-me';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from './basicComponents/Button';
import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import BeerCard from './BeerCard';

const FavoritesPage = () => {
  const { likedBeers } = useStoreMe('likedBeers');
  const [shouldShowBeerChange, setShouldShowBeerChange] = useState(false);
  const beersToShow = Object.values(likedBeers);

  const showSignOfChangedBeer = () => {
    if (shouldShowBeerChange) {
      setShouldShowBeerChange(false);
    } else {
      setShouldShowBeerChange(true);
    }
  };

  useEffect(() => {
    if (beersToShow.length !== 0) {
      // If there's no liked beer, there's no need to trigger the check
      setStoreMe({ shouldCheckFavoritesForChange: true });
    }
  }, [beersToShow.length]);

  return (
    <Wrap>
      <Stack spacing={48} alignItems="center">
        <Text text="Favorite Beers" heading={1} isNotSelectable />

        {beersToShow.length !== 0 && (
          <Inner>
            <Text
              text="For dev purposes: If you want to see how it will look if some beer is changed from the API "
              body={1}
              paddingRight={16}
            />
            <Button text="click" onClick={() => showSignOfChangedBeer()} />
          </Inner>
        )}

        <Stack direction="row" alignItems="center" spacing={32} flexWrap="wrap" marginTop={32}>
          {beersToShow.map(beer => (
            <BeerCard
              beer={beer}
              marginBottom="48px"
              key={`${beer.name}-${beer.first_brewed}`}
              shouldShowChangeDev={shouldShowBeerChange}
            />
          ))}

          {beersToShow.length === 0 && <Text text="You have not liked a beer yet" heading={3} />}
        </Stack>
      </Stack>
    </Wrap>
  );
};

export default FavoritesPage;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 50px 240px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 380px;
  padding: 20px;
  border: 1px dotted #673800;
  border-radius: 8px;
`;
