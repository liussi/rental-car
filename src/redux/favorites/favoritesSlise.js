import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(({ id }) => id !== payload);
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

export const favoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);
export const { addToFavorites, removeFavorites } = favoritesSlice.actions;