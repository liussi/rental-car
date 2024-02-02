import CardItem from '../CardItem/cardItem';
import React from 'react';
import PropTypes from 'prop-types'; // Додайте імпорт PropTypes
import { Container } from './card.styled';

function Card({ catalogData }) {
  
  return (
    <Container>
     
        {catalogData.length > 0 ? (
          catalogData.map(product => (
            <CardItem catalogData={product} key={product.id} />
          ))
        ) : (
          <p>No products available</p>
          // Або інший компонент-заповнювач чи текст за вашим вибором
        )}
      
    </Container>
  );
}

Card.propTypes = {
  catalogData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      fuelConsumption: PropTypes.string.isRequired,
      engineSize: PropTypes.string.isRequired,
      accessories: PropTypes.array.isRequired,
      functionalities: PropTypes.array.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
