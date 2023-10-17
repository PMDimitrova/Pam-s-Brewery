import { setStoreMe, useStoreMe } from 'store-me';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import canSound from '../sounds/can-opening.mp3';
import Button from './basicComponents/Button';
import Stack from './basicComponents/Stack';
import Text from './basicComponents/Text';
import BeerCard from './BeerCard';
import Input from './Input';

const CataloguePage = () => {
  const { allBeers, shouldFetchBeers, foundBeersFromSearch } = useStoreMe(
    'allBeers',
    'shouldFetchBeers',
    'foundBeersFromSearch'
  );
  const [searchValue, setSearchValue] = useState('');
  const [shouldShowSearchResult, setShouldShowSearchResult] = useState(false);
  const beersToShow = shouldShowSearchResult ? foundBeersFromSearch : allBeers;
  console.log('foundBeersFromSearch: ', foundBeersFromSearch);

  const canOpeningAudio = new Audio(canSound);

  const onInputChange = value => {
    console.log('value: ', value);
    // replaces blank spaces with underscore as per PunkAPI requirements
    const newValue = value.replace(/ |,/g, '_');

    if (value === '') {
      setShouldShowSearchResult(false);
    }

    setSearchValue(newValue);
  };

  const onSearchButtonClick = () => {
    console.log('onSearchButtonClick: !!! ');
    setStoreMe({ shouldSearchForBeerByName: true, nameValueForSearch: searchValue });
    setShouldShowSearchResult(true);
  };

  useEffect(() => {
    if (!shouldFetchBeers && allBeers.length === 0) {
      setStoreMe({ shouldFetchBeers: true });
    }
  }, [shouldFetchBeers]);

  // TODO: add pagination and request for next pages if there's time left
  // if one more field pop up later on - use react final forms

  return (
    <Wrap>
      <Stack spacing={48} alignItems="center">
        <Text text="Catalogue" heading={1} />

        <Stack direction="row" alignItems="center" spacing={24}>
          <Input
            value={searchValue}
            minLength={350}
            placeholder="Type a name or part of it"
            onChange={e => onInputChange(e.target.value.trim())}
            onKeyDown={e => e.keyCode === 13 && onSearchButtonClick()}
          />
          <Button text="Search" isDisabled={searchValue.trim() === ''} onClick={() => onSearchButtonClick()} />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={32} flexWrap="wrap" marginTop={32}>
          {beersToShow.map(beer => (
            <BeerCard
              beer={beer}
              marginBottom="48px"
              onClick={() => canOpeningAudio.play()}
              key={`${beer.name}-${beer.first_brewed}`}
            />
          ))}

          {shouldShowSearchResult && foundBeersFromSearch.length == 0 && (
            <Text text="No result for your search" heading={3} weight={700} />
          )}
        </Stack>
      </Stack>
    </Wrap>
  );
};

export default CataloguePage;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 50px 240px;
`;
