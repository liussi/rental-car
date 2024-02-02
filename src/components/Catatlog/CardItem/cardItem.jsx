// cardItem.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardTitle,
  CardContent,
  CardInfo,
  CardButton,
  CardImage,
  Icon,
} from './cardItem.styled';

import Modal from '../../Modal/modal';

function CardItem({ catalogData }) {
  const {
    id,
    make,
    year,
    rentalCompany,
    type,
    functionalities,
    address,
    img,
    rentalPrice,
  } = catalogData;

  const [isModalOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    // Отримайте дані з локального сховища
    JSON.parse(localStorage.getItem('favorites'))?.some(car => car.id === id) ||
      false
  );

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFavoriteClick = () => {
    // Оновіть локальне сховище при додаванні або видаленні
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyInFavorites = storedFavorites.some(car => car.id === id);

    if (isAlreadyInFavorites) {
      const updatedFavorites = storedFavorites.filter(car => car.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...storedFavorites, { id, ...catalogData }];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    // Оновіть локальний стан
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <CardWrapper>
        <Icon>
          <use
            xlinkHref="../../../images/symbol-defs.svg#icon-heart"
            fill="black"
          ></use>
        </Icon>

        <CardImage src={img} alt="Car Photo" />

        <CardContent>
          <CardTitle>
            {make}, {year}
          </CardTitle>
          <CardInfo>{rentalPrice}</CardInfo>
        </CardContent>

        <p>{address}</p>
        <p>{rentalCompany}</p>
        <p> {type}</p>
        <p> {make}</p>
        <p> {id}</p>

        <p> {functionalities[0]}</p>

        <CardButton onClick={openModal}>Learn more</CardButton>
      </CardWrapper>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        catalogData={catalogData}
      ></Modal>
    </>
  );
}

CardItem.propTypes = {
  catalogData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
