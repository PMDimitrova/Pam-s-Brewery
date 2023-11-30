import { useStoreMe,setStoreMe } from 'store-me';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from './basicComponents/Button';
import Stack from './basicComponents/Stack';
import barrels from '../images/Barrels.jpg';
import colors from '../_constants/colors';
import Text from './basicComponents/Text';

const Home = () => {
  const {isWeb3CheckOFF} = useStoreMe('isWeb3CheckOFF');
  const navigate = useNavigate();

  return (
    <Wrap $backgroundColor={colors.background}>
      <Stack width="100%">
        <img src={barrels} alt="beer barrel" />
      </Stack>

      <Stack position="absolute" top="20%" left="10%">
        <Text text="Wondering what kind of beer you want today?" heading={1} isNotSelectable />
        <Text text="You are in the right place!" heading={1} weight={700} isNotSelectable />

        <Stack direction="row" spacing={4}>
          <Text text="Go check our" heading={1} isNotSelectable />
          <Text text="Catalogue" heading={1} onHoverColor="textSecondary" onClick={() => navigate('/catalogue')} />
        </Stack>

        <Stack direction="row" spacing={4}>
          <Text text="Or go" heading={1} isNotSelectable />
          <Text
            text="on adventure"
            heading={1}
            onHoverColor="textSecondary"
            onClick={() => navigate('/on-adventure')}
          />
          <Text text="and see what the Universe will suggest to you" heading={1} isNotSelectable />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={16}>
          <Text text="If you want to use our functionalities, please " heading={1} isNotSelectable />
          <Text
            text="connect your MetaMask Account"
            heading={1}
            onHoverColor="textSecondary"
            onClick={() => navigate('/web3profile')}
          />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={16}>
         <Text text="Web3 functionalities are" heading={1} isNotSelectable />
          {isWeb3CheckOFF ?
          (<Button text='OFF' onClick={() => setStoreMe({isWeb3CheckOFF: false})}/>) :
          (<Button text='ON' onClick={() => setStoreMe({isWeb3CheckOFF: true})}/>)
          }
        </Stack>
      </Stack>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex: 1;
  overflow: hidden;
`;
