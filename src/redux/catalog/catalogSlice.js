// catalogReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getAllCatalog } from './operations';
import { getCatalogList } from './operations';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
     
     updateFilteredData: (state, action) => {
       

      //  state.filteredData = { ...state.filteredData, ...action.payload };
      state.filteredData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCatalog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCatalog.fulfilled, (state, action) => {
        state.catalog = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getAllCatalog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getCatalogList.pending, (state) => {
  state.status = 'loading';
})
.addCase(getCatalogList.fulfilled, (state, action) => {
  state.list = action.payload;
  state.status = 'succeeded';
})
.addCase(getCatalogList.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
});
  },
});
export const { updateFilteredData } = catalogSlice.actions;

// export const { updateFilters } = catalogSlice.actions;

export const reducerCatalog = catalogSlice.reducer;
