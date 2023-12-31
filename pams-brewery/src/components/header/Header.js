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

        <Text text="Pam`s little beer catalogue" heading={2} weight={700} isNotSelectable />
      </Stack>

      <Stack direction="row" spacing={16} alignItems="center">
        <Text
          text="home"
          heading={4}
          textTransform="uppercase"
          onHoverColor="textSecondary"
          onClick={() => navigate('/')}
          isNotSelectable
        />
        <Text
          text="catalogue"
          heading={4}
          textTransform="uppercase"
          onHoverColor="textSecondary"
          onClick={() => navigate('/catalogue')}
          isNotSelectable
        />
        <Text
          text="favorites"
          heading={4}
          textTransform="uppercase"
          onHoverColor="textSecondary"
          onClick={() => navigate('/favorites')}
          isNotSelectable
        />
        <Text
          text="adventure"
          heading={4}
          textTransform="uppercase"
          onHoverColor="textSecondary"
          onClick={() => navigate('/on-adventure')}
          isNotSelectable
        />
        <Text
          text="web3 profile"
          heading={4}
          textTransform="uppercase"
          onHoverColor="textSecondary"
          onClick={() => navigate('/web3profile')}
          isNotSelectable
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
