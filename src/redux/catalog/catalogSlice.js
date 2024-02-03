
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
        state.catalog = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getCatalogList.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      
  },
});

export const { updatePage } = catalogSlice.actions;
export const reducerCatalog = catalogSlice.reducer;