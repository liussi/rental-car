import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DescrContainer,
  Descr,
  Button,
  SpanPrice,
  Title,
  ButtonHeart,
  Img,
  ImageContainer,
  Item,
  Span,
} from './cardItem.styled';

import Modal from '../Modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorFavorites } from '../../redux/favorites/selector';
import {
  addToFavorites,
  removeFavorites,
} from '../../redux/favorites/favoritesSlise';
import Icons from '../../images/symbol-defs.svg';
import rentalCar from '../../images/rentalCar.png';
import ModalCard from 'components/ModalCard/modalCard';

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
    model,
    mileage,
  } = catalogData;

  const [isOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const storedFavorites = useSelector(getSelectorFavorites);

  useEffect(() => {
    setIsFavorite(storedFavorites.some(favorite => favorite.id === id));
  }, [id, storedFavorites]);

  const handleFavoriteToggle = () => {
    if (storedFavorites.some(favorite => favorite.id === id)) {
      dispatch(removeFavorites(id));
      setIsFavorite(false);
    } else {
      dispatch(addToFavorites(catalogData));
      setIsFavorite(true);
    }
  };

  return (
    <>
      <Item>
        <ImageContainer>
          {!img ? (
            <Img src={rentalCar} width={274} />
          ) : (
            <Img src={img} alt={`${make}`} width={274} />
          )}
          {isFavorite ? (
            <ButtonHeart type="button" onClick={handleFavoriteToggle}>
              <svg width={18} height={18}>
                <use href={Icons + '#icon-heart-blue'} />
              </svg>
            </ButtonHeart>
          ) : (
            <ButtonHeart type="button" onClick={handleFavoriteToggle}>
              <svg width={18} height={18}>
                <use href={Icons + '#icon-heart-hidden'} />
              </svg>
            </ButtonHeart>
          )}
        </ImageContainer>
        <Title>
          {make}
          {make && <Span>{model}</Span>}, {year}{' '}
          <SpanPrice>{rentalPrice}</SpanPrice>
        </Title>
        <DescrContainer>
          <Descr>
            {address} | {rentalCompany} | {type} | {make} | {mileage} |{' '}
            {functionalities[0]}
          </Descr>
        </DescrContainer>
        <Button onClick={() => openModal(id)}>Learn More</Button>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          catalogData={catalogData}
          id={id}
        >
          <ModalCard catalogData={catalogData} />
        </Modal>
      </Item>
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
    model: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    children: PropTypes.node,
  }).isRequired,
};

export default CardItem;
