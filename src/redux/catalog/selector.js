export const selectCatalog = state => state.catalog.catalog;
export const selectList = state => state.catalog.list;

// export const selectMakeFilter = (state) => state.catalog.filter.make;
// export const selectRentalPriceFilter = (state) => state.catalog.filter.rentalPrice;
// export const selectMileageFilter = (state) => state.catalog.filter.mileage;
export const selectPageFilter = (state) => state.catalog.page;
export const selectLimitFilter = (state) => state.catalog.limit;
export const selectFilteredData = (state) => state.catalog.filteredData;
export const selectSelectedMake = (state) => state.catalog.filteredData.selectedMake;
export const selectMinRentalPrice = (state) => state.catalog.filteredData.minRentalPrice;
export const selectMinMileage = (state) => state.catalog.filteredData.minMileage;
export const selectMaxMileage = (state) => state.catalog.filteredData.maxMileage;
