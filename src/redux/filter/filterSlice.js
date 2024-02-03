import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
 reducers: { 
     updateFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { updateFilteredData } = filtersSlice.actions;
export const reducerFilter = filtersSlice.reducer;

