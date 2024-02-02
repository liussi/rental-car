import React, { useEffect, useState } from 'react';
const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFromFavorites = id => {
    // Оновлення стану, вилучаючи обраного улюбленого
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(updatedFavorites);

    // Збереження оновленого списку улюблених в локальному сховищі
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
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
  );
};

export default FavoriteList;
