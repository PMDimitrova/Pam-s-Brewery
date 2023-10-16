import styled from 'styled-components';

import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import colors from '../_constants/colors';

const BeerCard = ({ beer, marginBottom }) => {
  const { name, image_url } = beer;

  return (
    <Stack position="relative" maxWidth="100%">
      <Card $marginBottom={marginBottom}>
        <img src={image_url} height={350} alt="beer" />
      </Card>

      <HoverCard>
        <Stack paddingLeft={32} paddingRight={32} width="100%" height="100%" justifyContent="space-between">
          <Stack alignItems="flex-end">
            <Text text="like" />
          </Stack>

          <Stack>
            <Text text={name} heading={3} maxWidth="100px" color="fontMain" weight={900} />
          </Stack>
        </Stack>
      </HoverCard>
    </Stack>
  );
};

export default BeerCard;

// TODO: width & height should not be static

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  margin-bottom: ${props => props.$marginBottom};
  border-radius: 6px;
  background-color: ${colors.background};
`;

const HoverCard = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 200px;
  height: 350px;
  background-color: ${colors.background};
  opacity: 0%;
  transition: opacity 0.3s ease-in;

  &:hover {
    opacity: 75%;
  }
`;
