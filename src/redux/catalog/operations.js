
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCatalog, getList } from '../../api/apiCatatlog';

export const getAllCatalog = createAsyncThunk('catalog/getCatalog', async ({ page, limit }, { rejectWithValue }) => {
  try {
   const data = await getCatalog({ page, limit });
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getCatalogList = createAsyncThunk('catalog/getList', async (_, { rejectWithValue }) => {
  try {
  const response = await getList();

return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

