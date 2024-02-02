import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredData } from '../../../redux/catalog/catalogSlice';
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
  console.log('Min Rental Price:', minRentalPrice);
  console.log('Min selectedMake :', selectedMake);

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
    console.log('Filter Button Clicked');

    const filteredData = catalogData.filter(car => {
      const makeCondition = selectedMake === 'all' || car.make === selectedMake;
      console.log('Make Condition:', makeCondition);

      const rentalPriceCondition =
        minRentalPrice === '' ||
        +car.rentalPrice.replace('$', '') >= +minRentalPrice;
      console.log('Rental Price Condition:', rentalPriceCondition);

      const mileageCondition =
        (minMileage === '' || parseInt(car.mileage) >= parseInt(minMileage)) &&
        (maxMileage === '' || parseInt(car.mileage) <= parseInt(maxMileage));
      console.log('Mileage Condition:', mileageCondition);

      return makeCondition && rentalPriceCondition && mileageCondition;
    });

    const sortedData = filteredData.sort((a, b) => {
      return +a.rentalPrice.replace('$', '') - +b.rentalPrice.replace('$', '');
    });

    onFilterChange(sortedData);
    console.log(sortedData);
    dispatch(updateFilteredData(sortedData));
  };
 useEffect(() => {
   handleFilter({ preventDefault: () => {} });
 }, []);
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

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateFilteredData } from '../../../redux/catalog/catalogSlice';
// import { selectCatalog, selectList, selectMaxMileage, selectMinMileage, selectMinRentalPrice, selectSelectedMake } from '../../../redux/catalog/selector';
// import PropTypes from 'prop-types';

// function Filter({ onFilterChange }) {
//   const dispatch = useDispatch();
//   const catalogData = useSelector(selectCatalog);
//   const brandCarList = useSelector(selectList);
// const selectedMake = useSelector(selectSelectedMake);
// const minRentalPrice = useSelector(selectMinRentalPrice);
// const minMileage = useSelector(selectMinMileage);
// const maxMileage = useSelector(selectMaxMileage);
// // const [firstRender, setFirstRender] = useState(true);


//   const rentalPriceOptions = [];
//   for (let price = 10; price <= 500; price += 10) {
//     rentalPriceOptions.push(price);
//   }
// const handleCategoryChange = event => {
//   const selectedMake = event.target.value;
//   dispatch(updateFilteredData(selectedMake));
// };

// const handleMinRentalPriceChange = event => {
//   const minValue = event.target.value;
//   dispatch(updateFilteredData(minValue));
// };

// const handleMinMileageChange = event => {
//   const minValue = event.target.value;
//   dispatch(updateFilteredData(minValue));
// };

// const handleMaxMileageChange = event => {
//   const maxValue = event.target.value;
//   dispatch(updateFilteredData(maxValue));
// };

//   const handleFilter = event => {
//     event.preventDefault();
//     console.log('Filter Button Clicked');
 
//     const filteredData = catalogData.filter(car => {
//       const makeCondition = selectedMake === 'all' || car.make === selectedMake;
//       console.log('Make Condition:', makeCondition);

//       const rentalPriceCondition =
//         minRentalPrice === '' ||
//         +car.rentalPrice.replace('$', '') >= +minRentalPrice;
//       console.log('Rental Price Condition:', rentalPriceCondition);

//       const mileageCondition =
//         (minMileage === '' || parseInt(car.mileage) >= parseInt(minMileage)) &&
//         (maxMileage === '' || parseInt(car.mileage) <= parseInt(maxMileage));
//       console.log('Mileage Condition:', mileageCondition);

//       return makeCondition && rentalPriceCondition && mileageCondition;
//     });

//     const sortedData = filteredData.sort((a, b) => {
//       return +a.rentalPrice.replace('$', '') - +b.rentalPrice.replace('$', '');
//     });
//      dispatch(updateFilteredData(sortedData));
//     onFilterChange(sortedData);
//     console.log(sortedData);

//     // setFirstRender(false);
//   };

//   // useEffect(() => {
//   //   // Перевіряємо, чи це перший рендер перед викликом фільтрації
//   //   if (firstRender) {
//   //     onFilterChange(catalogData);
//   //     setFirstRender(false);
//   //   }
//   // }, [firstRender, catalogData, onFilterChange]);

//   return (
//     <form onSubmit={handleFilter}>
//       <div>
//         <label>
//           Category:
//           <select onChange={handleCategoryChange} value={selectedMake}>
//             <option value="all">All</option>
//             {brandCarList.map(category => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Min Rental Price:
//           <select value={minRentalPrice} onChange={handleMinRentalPriceChange}>
//             {rentalPriceOptions.map(price => (
//               <option key={price} value={price}>
//                 {price}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Min Mileage:
//           <input
//             type="text"
//             value={minMileage}
//             onChange={handleMinMileageChange}
//           />
//         </label>
//         <label>
//           Max Mileage:
//           <input
//             type="text"
//             value={maxMileage}
//             onChange={handleMaxMileageChange}
//           />
//         </label>
//         <button type="submit">Filter</button>{' '}
//       </div>
//     </form>
//   );
// }
// Filter.propTypes = {
//   onFilterChange: PropTypes.func.isRequired,
// };
// export default Filter;
