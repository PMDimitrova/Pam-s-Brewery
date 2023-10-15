import styled from 'styled-components';

import colors from '../../_constants/colors';
import Stack from '../basicComponents/Stack';
import logo from '../../images/LOGO-2.png';
import Text from '../basicComponents/Text';

const Header = () => (
  <Wrap $backgroundColor={colors.background}>
    <Stack spacing={24} direction="row" alignItems="center">
      {/* TODO: this should be anchor to home */}
      <img src={logo} alt="beers-logo" width="75px" />

      <Text text="Pam`s little beer catalogue" heading={1} weight={700} />
    </Stack>

    <Stack>buttons part</Stack>
  </Wrap>
);

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 64px;
  padding: 0 16px;
  background-color: ${props => props.$backgroundColor};
  font-weight: 900;
`;
