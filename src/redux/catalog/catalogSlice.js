
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getAllCatalog } from './operations';
import { getCatalogList } from './operations';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCatalog.fulfilled, (state, action) => {
        if (state.page === 1) {

          state.catalog = action.payload;
        } else {

          state.catalog = [...state.catalog, ...action.payload];
        }
      })
      .addCase(getCatalogList.fulfilled, (state, action) => {
        state.list = action.payload;

      })
  },
});

export const { updatePage, setCatalogList } = catalogSlice.actions;
export const reducerCatalog = catalogSlice.reducer;