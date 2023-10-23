import { useNavigate } from 'react-router-dom';

import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';

const PleaseConnectWallet = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems="center" spacing={16}>
      <Text
        text="If you want to use our functionalities, please connect your MetaMask Account in"
        heading={2}
        isNotSelectable
        maxWidth="600px"
        textAlign="center"
      />

      <Text
        text="Web3 Profile section"
        heading={2}
        onHoverColor="textSecondary"
        onClick={() => navigate('/web3profile')}
      />
    </Stack>
  );
};

export default PleaseConnectWallet;
