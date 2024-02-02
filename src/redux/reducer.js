// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
import { reducerCatalog } from './catalog/catalogSlice'; // Замініть Sliсe на Slice
import { combineReducers } from 'redux';
// import { filtersSlice } from './filter/filterSlice';

  
export const reducer = combineReducers({
  catalog: reducerCatalog,
  // filter: filtersSlice,
});
