import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredData } from '../../redux/filter/filterSlice';
import CardItem from 'components/CardItem/cardItem';
import { getSelectorFavorites } from '../../redux/favorites/selector';
import { Container, FilteredContainer, ListItems } from './favorites.styled';
import Filter from 'components/Filter/filter';
import NotResult from 'components/NotResult/notResult';

const FavoriteList = () => {
  const favorites = useSelector(getSelectorFavorites);
  const dispatch = useDispatch();

  const handleFilterChange = filteredData => {
    dispatch(updateFilteredData(filteredData));
  };
 
return (
  <Container>
    <FilteredContainer>
      <Filter onFilterChange={handleFilterChange} data={favorites} />
    </FilteredContainer>

    {favorites.length > 0 ? (
      <ListItems>
        {favorites.map(catalogData => (
          <div key={catalogData.id}>
            <CardItem catalogData={catalogData} />
          </div>
        ))}
      </ListItems>
    ) : (
      <NotResult />
    )}

  </Container>
);


};

export default FavoriteList;
