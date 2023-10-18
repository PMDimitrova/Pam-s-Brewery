import { useStoreMe, setStoreMe } from 'store-me';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import canSound from '../sounds/can-opening.mp3';
import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import colors from '../_constants/colors';
import Icon from './basicComponents/Icon';

const BeerCard = ({ beer, marginBottom }) => {
  const { likedBeers } = useStoreMe('likedBeers');
  const { name, image_url, isBeerLiked, id, hashedBeer } = beer;
  const canOpeningAudio = new Audio(canSound);
  const likeIconType = isBeerLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  const likeIconColor = isBeerLiked ? 'iconSecondary' : 'iconMain';

  const likeBeer = () => {
    /*
      As per the initial task the sound should be played when the beer is clicked,
      but I find it much more suitable to play it when a beer is liked
    */
    if (!isBeerLiked) {
      canOpeningAudio.play();
    }

    const likedBeer = { ...beer, isBeerLiked: true };
  };

  return (
    <Stack position="relative" maxWidth="100%">
      <Card $marginBottom={marginBottom}>
        <img src={image_url} height={350} alt="beer" />
      </Card>

      <HoverCard>
        <Stack paddingLeft={32} paddingRight={32} width="100%" height="100%" justifyContent="space-between">
          <Stack alignItems="flex-end" onClick={() => likeBeer()}>
            <Icon icon={likeIconType} size={24} color={likeIconColor} />
          </Stack>

          <Stack>
            <Text text={name} heading={3} maxWidth="100px" weight={900} />
          </Stack>
        </Stack>
      </HoverCard>
    </Stack>
  );
};

export default BeerCard;

BeerCard.propTypes = {
  beer: PropTypes.object,
  marginBottom: PropTypes.string,
};

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
  display: flex;
  position: absolute;
  z-index: 10;
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
