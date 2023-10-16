import { setStoreMe, useStoreMe } from 'store-me';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from './basicComponents/Button';
import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import RevealCard from './RevealCard';

const AdventurePage = () => {
  const { randomBeer } = useStoreMe('randomBeer');
  const [beerToShow, setBeerToShow] = useState({});
  const [gotBeer, setGotBeer] = useState(false);

  useEffect(() => {
    setBeerToShow(randomBeer);
    if (randomBeer) {
      setGotBeer(true);
    }
  }, [randomBeer]);

  // TODO: loader

  return (
    <Wrap>
      <Stack maxWidth="300px" justifyContent="center">
        <Text text="Wondering what you want to drink today?" heading={1} weight={700} />
        <Button
          text={gotBeer ? 'Show me something else' : 'Ask the Universe'}
          onClick={() => setStoreMe({ shouldGetRandomBeer: true })}
        />
      </Stack>

      <RevealCard beerToShow={beerToShow} shouldShowBeer={gotBeer} />
    </Wrap>
  );
};

export default AdventurePage;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  max-width: 60%;
  width: 100%;
  margin-top: 50px;
`;
