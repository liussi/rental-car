import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/catalog/selector';

import Card from 'components/Catatlog/CardList/card';
import { getAllCatalog, getCatalogList } from '../../redux/catalog/operations';
import Filter from 'components/Catatlog/Filter/filter';
import { updateFilteredData } from '../../redux/filter/filterSlice';
import { selectFilteredData } from '../../redux/filter/filterSelector';

function Catalog() {
  const catalogData = useSelector(selectCatalog);
  const filteredData = useSelector(selectFilteredData);

  console.log(filteredData);

  const handleFilterChange = filteredData => {
    dispatch(updateFilteredData(filteredData));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCatalog());
    dispatch(getCatalogList());
  }, [dispatch]);
  return (
    <>
      <Filter onFilterChange={handleFilterChange} />
      {filteredData !== null && filteredData.length > 0 ? (
        <Card catalogData={filteredData} />
      ) : (
        <Card catalogData={catalogData} />
      )}
    </>
  );
}

export default Catalog;
