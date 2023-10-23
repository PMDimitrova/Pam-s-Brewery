import { setStoreMe, useStoreMe } from 'store-me';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAccount } from 'wagmi';

import PleaseConnectWallet from './PleaseConnectWallet';
import Button from './basicComponents/Button';
import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import RevealCard from './RevealCard';

const AdventurePage = () => {
  const { randomBeer } = useStoreMe('randomBeer');
  const [beerToShow, setBeerToShow] = useState({});
  const [gotBeer, setGotBeer] = useState(false);
  const { isConnected } = useAccount();

  useEffect(() => {
    setBeerToShow(randomBeer);
    if (randomBeer) {
      setGotBeer(true);
    }
  }, [randomBeer]);

  // TODO: loader

  return (
    <Wrap>
      <Text text="Wondering what you want to drink today?" heading={1} weight={700} textAlign="center" />

      {isConnected ? (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Button
            text={gotBeer ? 'Show me something else' : 'Ask the Universe'}
            onClick={() => setStoreMe({ shouldGetRandomBeer: true })}
          />

          <RevealCard beerToShow={beerToShow} shouldShowBeer={gotBeer} />
        </Stack>
      ) : (
        <PleaseConnectWallet />
      )}
    </Wrap>
  );
};

export default AdventurePage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  max-width: 50%;
  width: 100%;
  margin-top: 50px;
`;
