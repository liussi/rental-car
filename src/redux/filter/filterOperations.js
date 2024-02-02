// import { createAsyncThunk } from '@reduxjs/toolkit';

// import axios from 'axios';
// export const getCatalogList = createAsyncThunk('catalog/getCatalogList', async (_, { rejectWithValue }) => {
//   try {
//     const headers = {
//       'Content-Type': 'application/json',
//     };

//     const { data } = await axios.get('catalog-list', { headers });
//     console.log('Отримані дані:', data);
//     return data;
//   } catch (error) {
//     console.error('Помилка отримання каталогу:', error);
//     return rejectWithValue(error.message);
//   }
// });

// export const getFilter = createAsyncThunk(
//   'catalog/getCatalog',
//   async ({ make, rentalPrice, mileage, page, limit }, { rejectWithValue }) => {
    

//     try {
//       const data = await getCatalog({
//        make,rentalPrice,mileage,page,limit
//       });
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );