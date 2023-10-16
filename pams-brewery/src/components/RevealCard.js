import styled from 'styled-components';
import PropTypes from 'prop-types';

import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import colors from '../_constants/colors';

// TODO: what would happen, if the api doesn't return a beer.?

const RevealCard = ({ beerToShow, shouldShowBeer }) => {
  console.log('shouldShowBeer: ', shouldShowBeer);

  return (
    <Wrap>
      {shouldShowBeer && (
        <Stack direction="row" width="100%" justifyContent="space-between">
          <Stack maxWidth="370px" paddingTop={40}>
            <Text text="Try this:" heading={2} />

            <Stack>
              <Stack direction="row" spacing={16}>
                <Text text="Name: " heading={3} weight={900} />
                <Text text={beerToShow.name} heading={4} />
              </Stack>

              <Stack direction="row" spacing={16}>
                <Text text="Food pairing: " heading={3} weight={900} />
                <Text text={beerToShow.food_pairing} heading={4} />
              </Stack>
            </Stack>
          </Stack>

          {beerToShow.image_url && <img src={beerToShow.image_url} height={350} alt="beer" />}
        </Stack>
      )}

      {!shouldShowBeer && <Inner shouldShowBeer={shouldShowBeer}>?</Inner>}
    </Wrap>
  );
};

export default RevealCard;

RevealCard.propTypes = {
  beerToShow: PropTypes.object,
  shouldShowBeer: PropTypes.bool,
};
const Wrap = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 450px;
`;

const Inner = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 450px;
  font-size: 300px;
  font-weight: 900;
  color: ${colors.textMain};
  background-color: ${colors.background};
`;
