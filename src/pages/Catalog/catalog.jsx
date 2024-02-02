// Favorites.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  selectFilteredData } from '../../redux/catalog/selector';
import Card from 'components/Catatlog/CardList/card';
import {  getAllCatalog, getCatalogList } from '../../redux/catalog/operations';
import Filter from 'components/Catatlog/Filter/filter';
import { updateFilteredData } from '../../redux/catalog/catalogSlice';



function Catalog() {
  // const make = useSelector(selectMakeFilter);
  // const rentalPrice = useSelector(selectRentalPriceFilter);
  // const mileage = useSelector(selectMileageFilter);
// const catalogData = useSelector(selectCatalog);
   const filteredData = useSelector(selectFilteredData);
  // const brandCarList = useSelector(selectList);
  const [firstInteraction, setFirstInteraction] = useState(false);

console.log(filteredData);

  const handleFilterChange = filteredData => {
      console.log('Filtered data received:', filteredData);

    dispatch(updateFilteredData(filteredData));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstInteraction) {
      const fetchData = async () => {
        // Викликаєте операції з фільтрами тільки після першої взаємодії
        await dispatch(getAllCatalog(filteredData));
        await dispatch(getCatalogList(filteredData));
      };

      fetchData();
    } else {
      // Якщо це перший рендер, просто встановіть firstInteraction в true
      setFirstInteraction(true);
    }
  }, [dispatch, filteredData, firstInteraction]);
  return (
    <>
      <Filter onFilterChange={handleFilterChange} />
      <Card catalogData={filteredData} />;
    </>
  );
}

export default Catalog;
