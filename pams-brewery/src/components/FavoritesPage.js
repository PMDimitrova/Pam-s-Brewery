import styled from 'styled-components';
import { useStoreMe } from 'store-me';

import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import BeerCard from './BeerCard';

const FavoritesPage = () => {
  const { likedBeers } = useStoreMe('likedBeers');
  const beersToShow = Object.values(likedBeers);

  return (
    <Wrap>
      <Stack spacing={48} alignItems="center">
        <Text text="Favorite Beers" heading={1} isNotSelectable />

        <Stack direction="row" alignItems="center" spacing={32} flexWrap="wrap" marginTop={32}>
          {beersToShow.map(beer => (
            <BeerCard beer={beer} marginBottom="48px" key={`${beer.name}-${beer.first_brewed}`} />
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
