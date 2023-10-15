import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../_constants/colors';
import Stack from '../basicComponents/Stack';
import logo from '../../images/LOGO-2.png';
import Text from '../basicComponents/Text';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrap $backgroundColor={colors.background}>
      <Stack spacing={24} direction="row" alignItems="center">
        <Stack onClick={() => navigate('/')}>
          <img src={logo} alt="beers-logo" width="75px" />
        </Stack>

        <Text text="Pam`s little beer catalogue" heading={1} weight={700} isNotSelectable />
      </Stack>

      <Stack direction="row" spacing={16} alignItems="center">
        <Text
          text="home"
          heading={3}
          textTransform="uppercase"
          onHoverColor="fontSecondary"
          onClick={() => navigate('/')}
        />
        <Text
          text="catalogue"
          heading={3}
          textTransform="uppercase"
          onHoverColor="fontSecondary"
          onClick={() => navigate('/catalogue')}
        />
        <Text
          text="favorites"
          heading={3}
          textTransform="uppercase"
          onHoverColor="fontSecondary"
          onClick={() => navigate('/favorites')}
        />
        <Text
          text="adventure"
          heading={3}
          textTransform="uppercase"
          onHoverColor="fontSecondary"
          onClick={() => navigate('/on-adventure')}
        />
      </Stack>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 999;
  top: 0;
  height: 64px;
  padding: 0 16px;
  background-color: ${props => props.$backgroundColor};
  font-weight: 900;
`;
