import { useEnsName, useAccount } from 'wagmi';
import styled from 'styled-components';
import { setStoreMe } from 'store-me';

import Button from './basicComponents/Button';
import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';

const Web3ProfilePage = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });

  // TODO: add loading state for the user

  return (
    <Wrap>
      <Stack spacing={48} alignItems="center">
        <Text text="Web3 connection status" heading={1} weight={700} />

        {isConnected ? (
          <Stack direction="row" alignItems="center" spacing={24}>
            <Stack alignItems="center" spacing={16}>
              <Text text="Connected to address:" heading={3} />
              <Text text={ensName ?? address} heading={3} color="textSecondary" />
            </Stack>

            <Button text="Disconnect from MM" onClick={() => setStoreMe({ shouldDisconnectFromMM: true })} />
          </Stack>
        ) : (
          <Stack
            direction="row"
            spacing={32}
            maxWidth="650px"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text text="For full access connect your MetaMask Wallet" heading={2} maxWidth="350px" />

            <Button text="Connect" onClick={() => setStoreMe({ shouldConnectToMM: true })} maxWidth={100} />
          </Stack>
        )}
      </Stack>
    </Wrap>
  );
};

export default Web3ProfilePage;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 50px 240px;
`;
