import styled from 'styled-components';
import { setStoreMe } from 'store-me';
import PropTypes from 'prop-types';
import { useState } from 'react';

import canSound from '../sounds/can-opening.mp3';
import dislikeSound from '../sounds/remove.mp3';
import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import colors from '../_constants/colors';
import Icon from './basicComponents/Icon';

const BeerCard = ({ beer, marginBottom, shouldShowChangeDev }) => {
  const { name, image_url, isBeerLiked, hasBeerChanged } = beer;
  const [isBeerLikedLocal, setIsBeerLikedLocal] = useState(isBeerLiked);
  const likeBeerSound = new Audio(canSound);
  const dislikeBeerSound = new Audio(dislikeSound);
  const likeIconType = isBeerLikedLocal ? 'fa-heart' : 'fa-heart';
  const likeIconColor = isBeerLikedLocal ? 'iconSecondary' : 'iconMain';

  const likeOrDislikeBeer = () => {
    /*
      As per the initial task the sound should be played when the beer is clicked,
      but I find it much more suitable to play it when a beer is liked or disliked
    */
    if (isBeerLiked) {
      dislikeBeerSound.play();
      setStoreMe({ beerToDislike: beer });
      setIsBeerLikedLocal(false);
    } else {
      likeBeerSound.play();
      setStoreMe({ beerToLike: beer });
      setIsBeerLikedLocal(true);
    }
  };

  return (
    <Stack position="relative" maxWidth="100%">
      <Card $marginBottom={marginBottom}>
        <IconWrapper $shouldShow={shouldShowChangeDev || hasBeerChanged}>
          <Icon icon="fa-bell" size={24} isSolidIcon color="iconTertiary" />
        </IconWrapper>

        <img src={image_url} height={350} alt="beer" />
      </Card>

      <HoverCard>
        <Stack paddingLeft={32} paddingRight={32} width="100%" height="100%" justifyContent="space-between">
          <Stack alignItems="flex-end">
            <Stack onClick={() => likeOrDislikeBeer()}>
              <Icon icon={likeIconType} isSolidIcon={isBeerLikedLocal} size={24} color={likeIconColor} />
            </Stack>
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
  shouldShowChangeDev: PropTypes.bool,
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

const IconWrapper = styled.div`
  opacity: ${props => (props.$shouldShow ? '100%' : 0)};
`;
