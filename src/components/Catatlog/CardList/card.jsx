import CardItem from '../CardItem/cardItem';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // Додайте імпорт PropTypes
import { Container } from './card.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectLimitFilter, selectPageFilter } from '../../../redux/catalog/selector';
import { getAllCatalog } from '../../../redux/catalog/operations';
import { updatePage } from '../../../redux/catalog/catalogSlice';

function Card({ catalogData }) {
    const dispatch = useDispatch();

  const page = useSelector(selectPageFilter);
    const limit = useSelector(selectLimitFilter);

    useEffect(() => {

      dispatch(getAllCatalog({ page: page, limit: limit }));
    }, [dispatch, page]);

    const handleNextPage = () => {
      // Dispatch an action to update the page
      dispatch(updatePage(page + 1)); // Assuming you have an updatePage action
    };

  
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
      <button onClick={handleNextPage}>Previous Page</button>
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
