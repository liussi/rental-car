import CardItem from '../CardItem/cardItem';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, ListItems, LoadMoreButton } from './card.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLimitFilter,
  selectPageFilter,
} from '../../redux/catalog/selector';
import { getAllCatalog } from '../../redux/catalog/operations';
import { updatePage } from '../../redux/catalog/catalogSlice';
import Loader from 'components/Loader/loader';
// import { selectPageFilter } from '../../redux/catalog/selector';

function Card({ catalogData }) {
  const dispatch = useDispatch();

  const page = useSelector(selectPageFilter);
  const limit = useSelector(selectLimitFilter);

  useEffect(() => {
    dispatch(getAllCatalog({ page, limit }));
  }, [dispatch, page]);

  const handleNextPage = () => {

    dispatch(updatePage(page + 1));
  };

  return (
    <Container>
      <ListItems>
        {catalogData.length > 0 ? (
          catalogData.map(product => (
            <CardItem catalogData={product} key={product.id} />
          ))
        ) : (
          <Loader />
        )}
      </ListItems>

      {catalogData.length > 0 && (
        <LoadMoreButton onClick={handleNextPage}>Load more</LoadMoreButton>
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
