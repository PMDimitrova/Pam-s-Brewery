import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Stack from './basicComponents/Stack';
import barrels from '../images/Barrels.jpg';
import colors from '../_constants/colors';
import Text from './basicComponents/Text';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrap $backgroundColor={colors.background}>
      <Stack width="100%">
        <img src={barrels} alt="beer barrel" />
      </Stack>

      <Stack position="absolute" top="30%" left="10%">
        <Text text="Wondering what kind of beer you want today?" heading={1} />
        <Text text="You are in the right place!" heading={1} weight={700} />

        <Stack direction="row" spacing={4}>
          <Text text="Go check our" heading={1} />
          <Text text="Catalogue" heading={1} onHoverColor="fontSecondary" onClick={() => navigate('/catalogue')} />
        </Stack>

        <Stack direction="row" spacing={4}>
          <Text text="Or go" heading={1} />
          <Text
            text="on adventure"
            heading={1}
            onHoverColor="fontSecondary"
            onClick={() => navigate('/on-adventure')}
          />
          <Text text="and see what the Universe will suggest to you" heading={1} />
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
