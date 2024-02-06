import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/catalog/selector';

import Card from 'components/CardList/card';
import Filter from 'components/Filter/filter';
import { selectFilteredData } from '../../redux/filter/filterSelector';
import { CatalogContainer } from './catalog.styled';
import { getAllCatalog, getCatalogList } from '../../redux/catalog/operations';

function Catalog() {
  const dispatch = useDispatch();
  const catalogData = useSelector(selectCatalog);
  const filteredData = useSelector(selectFilteredData);

  

  useEffect(() => {
    dispatch(getCatalogList());
    dispatch(getAllCatalog());
  }, [dispatch]);

    const cardsData = filteredData !== null && filteredData.length > 0 ? filteredData : catalogData;


  return (
    <CatalogContainer>
      <Filter  />
      <Card catalogData={cardsData} />
    </CatalogContainer>
  );
}

export default Catalog;
