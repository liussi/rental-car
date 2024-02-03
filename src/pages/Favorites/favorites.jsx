import Filter from 'components/Catatlog/Filter/filter';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredData } from '../../redux/filter/filterSlice';
import { removeFavorites } from '../../redux/favorites/favoritesSlise';
// import { selectFilteredData } from 'redux/catalog/selector';
import { getSelectorFavorites } from '../../redux/favorites/selector';

const FavoriteList = () => {
  const favorites = useSelector(getSelectorFavorites);
  // const filteredData = useSelector(selectFilteredData);
    const dispatch = useDispatch();

   const handleFilterChange = filteredData => {
    dispatch(updateFilteredData(filteredData));
  };
 const handleRemoveFromFavorites = id => {
   dispatch(removeFavorites(id));
 };
  // useEffect(() => {
  //   const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  //   setFavorites(storedFavorites);
  // }, []);

  // const handleRemoveFromFavorites = id => {
  //   // Оновлення стану, вилучаючи обраного улюбленого
  //   const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
  //   setFavorites(updatedFavorites);

  //   // Збереження оновленого списку улюблених в локальному сховищі
  //   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  // };

  return (
    <>
      <Filter onFilterChange={handleFilterChange} />
      <div>
        <h2>Favorite List</h2>
        <ul>
          {favorites.map(favorite => (
            <li key={favorite.id}>
              Елемент з ідентифікатором {favorite.id}, Опис:{' '}
              {favorite.description}{' '}
              <button onClick={() => handleRemoveFromFavorites(favorite.id)}>
                Видалити з улюблених
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FavoriteList;
