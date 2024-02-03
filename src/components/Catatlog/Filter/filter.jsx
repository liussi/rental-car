import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredData } from '../../../redux/filter/filterSlice';
import { selectCatalog, selectList } from '../../../redux/catalog/selector';
import PropTypes from 'prop-types';

function Filter({ onFilterChange }) {
  const dispatch = useDispatch();
  const catalogData = useSelector(selectCatalog);
  const brandCarList = useSelector(selectList);

  const [selectedMake, setSelectedMake] = useState('all');
  const [minRentalPrice, setMinRentalPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

console.log(brandCarList);
  const rentalPriceOptions = [];
  for (let price = 10; price <= 500; price += 10) {
    rentalPriceOptions.push(price);
  }

  const handleCategoryChange = event => {
    const selectedMake = event.target.value;
    setSelectedMake(selectedMake);
  };

  const handleMinRentalPriceChange = event => {
    const minValue = event.target.value;
    setMinRentalPrice(minValue);
  };

  const handleMinMileageChange = event => {
    const minValue = event.target.value;
    console.log('Min Mileage:', minValue);
    setMinMileage(minValue);
  };

  const handleMaxMileageChange = event => {
    const maxValue = event.target.value;
    console.log('Max Mileage:', maxValue);
    setMaxMileage(maxValue);
  };

  const handleFilter = event => {
    event.preventDefault();
  

    const filteredData = catalogData.filter(car => {
      const makeCondition = selectedMake === 'all' || car.make === selectedMake;
   

      const rentalPriceCondition =
        minRentalPrice === '' ||
        +car.rentalPrice.replace('$', '') >= +minRentalPrice;


      const mileageCondition =
        (minMileage === '' || parseInt(car.mileage) >= parseInt(minMileage)) &&
        (maxMileage === '' || parseInt(car.mileage) <= parseInt(maxMileage));


      return makeCondition && rentalPriceCondition && mileageCondition;
    });

    const sortedData = filteredData.sort((a, b) => {
      return +a.rentalPrice.replace('$', '') - +b.rentalPrice.replace('$', '');
    });

    onFilterChange(sortedData);
    console.log(sortedData);
    dispatch(updateFilteredData(sortedData));
  };

  return (
    <form onSubmit={handleFilter}>
      <div>
        <label>
          Category:
          <select onChange={handleCategoryChange} value={selectedMake}>
            <option value="all">All</option>
            {brandCarList.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Min Rental Price:
          <select value={minRentalPrice} onChange={handleMinRentalPriceChange}>
            {rentalPriceOptions.map(price => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </label>
        <label>
          Min Mileage:
          <input
            type="text"
            value={minMileage}
            onChange={handleMinMileageChange}
          />
        </label>
        <label>
          Max Mileage:
          <input
            type="text"
            value={maxMileage}
            onChange={handleMaxMileageChange}
          />
        </label>
        <button type="submit">Filter</button>{' '}
      </div>
    </form>
  );
}
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
export default Filter;
