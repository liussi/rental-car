
import { reducerCatalog } from './catalog/catalogSlice'; 
import { combineReducers } from 'redux';
import { favoritesReducer } from './favorites/favoritesSlise';
import { reducerFilter } from './filter/filterSlice';


  
export const reducer = combineReducers({
  catalog: reducerCatalog,
  filter:reducerFilter,
  favorites: favoritesReducer,
});
