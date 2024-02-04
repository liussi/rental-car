import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredData } from '../../redux/filter/filterSlice';
import {  selectCatalog, selectList } from '../../redux/catalog/selector';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {
  Button,
  Container,
  Form,
  InputContainer,
  InputLeft,
  InputRight,
  Label,
  SelectContainer,
  UnitLeft,
  UnitRight,
} from './filter.styled';


function Filter({ onFilterChange }) {
  const dispatch = useDispatch();
  const catalogData = useSelector(selectCatalog);
  const brandCarList = useSelector(selectList);
  
  const [selectedMake, setSelectedMake] = useState('');
  const [minRentalPrice, setMinRentalPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const rentalPriceOptions = [];
  for (let price = 10; price <= 500; price += 10) {
    rentalPriceOptions.push(price);
  }

  const handleCategoryChange = selectedOption => {
    setSelectedMake(selectedOption ? selectedOption.value : null);
  };
  const handleRentalPriceChange = selectedOption => {
    const minValue = selectedOption ? selectedOption.value : null;
    setMinRentalPrice(minValue);
  };
  const handleMinMileageChange = event => {
    const minValue = event.target.value;

    setMinMileage(minValue);
  };

  const handleMaxMileageChange = event => {
    const maxValue = event.target.value;

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
    <Form onSubmit={handleFilter}>
      <Container>
        <SelectContainer>
          <Label htmlFor="nameSelect">Car brand</Label>
          <Select
            onChange={handleCategoryChange}
            placeholder="Enter the text"
            value={
              selectedMake ? { value: selectedMake, label: selectedMake } : null
            }
            options={brandCarList.map(category => ({
              value: category,
              label: category,
            }))}
            styles={{
              control: styles => ({
                ...styles,
                width: '224px',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '16px',
                fontFamily: 'ManropeMedium',
                backgroundColor: 'rgba(247, 247, 251, 1)',
                appearance: 'none',
              }),

              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                  fontFamily: 'ManropeMedium',
                };
              },
              menuList: base => ({
                ...base,
                '::-webkit-scrollbar': {
                  width: '9px',
                },
                '::-webkit-scrollbar-track': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb:hover': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
              }),
              placeholder: styles => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          ></Select>
        </SelectContainer>
        <SelectContainer>
          <Label htmlFor="priceSelect">Price/ 1 hour</Label>

          <Select
            id="priceSelect"
            placeholder="To $"
            value={
              minRentalPrice
                ? { value: minRentalPrice, label: minRentalPrice }
                : null
            }
            onChange={handleRentalPriceChange}
            options={rentalPriceOptions.map(price => ({
              value: price,
              label: price,
            }))}
            styles={{
              control: styles => ({
                ...styles,
                width: '125px',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '16px',
                fontFamily: 'ManropeMedium',
                backgroundColor: 'rgba(247, 247, 251, 1)',
                appearance: 'none',
              }),
              option: (styles, { isFocused }) => ({
                ...styles,
                color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                fontFamily: 'ManropeMedium',
              }),
              menuList: base => ({
                ...base,
                '::-webkit-scrollbar': {
                  width: '9px',
                },
                '::-webkit-scrollbar-track': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb:hover': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
              }),
              placeholder: styles => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </SelectContainer>
        <SelectContainer>
          <Label>Car mileage / km</Label>
          <InputContainer>
            <InputLeft
              type="text"
              value={minMileage}
              onChange={handleMinMileageChange}
            />
            <UnitLeft>From</UnitLeft>
            <InputRight
              type="text"
              value={maxMileage}
              onChange={handleMaxMileageChange}
            />
            <UnitRight>To</UnitRight>
          </InputContainer>
        </SelectContainer>
        <Button type="submit">Filter</Button>{' '}
      </Container>
    </Form>
  );
}
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
export default Filter;
