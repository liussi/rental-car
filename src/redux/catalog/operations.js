import { createAsyncThunk } from '@reduxjs/toolkit';
import getCatalog from 'api/apiCatatlog';


  import axios from 'axios';

export const getAllCatalog = createAsyncThunk('catalog/getCatalog', async (_, { rejectWithValue }) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    const { data } = await axios.get('catalog', { headers });
    console.log('Отримані дані:', data);
    return data;
  } catch (error) {
    console.error('Помилка отримання каталогу:', error);
    return rejectWithValue(error.message);
  }
});
export const getFilter = createAsyncThunk(
  'catalog/getCatalog',
  async ({ make, rentalPrice}, { rejectWithValue }) => {
  
    try {
      const data = await getCatalog({
       make,rentalPrice
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getCatalogList = createAsyncThunk('catalog/getCatalogList', async (_, { rejectWithValue }) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    const { data } = await axios.get('catalog-list', { headers });
    console.log('Отримані дані ліст:', data);
    return data;
  } catch (error) {
    console.error('Помилка отримання каталогу:', error);
    return rejectWithValue(error.message);
  }
});