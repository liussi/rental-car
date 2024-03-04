import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReduser } from './auth/authSlise';
import { reducerCatalog } from './catalog/catalogSlice';
import { reducerFilter } from './filter/filterSlice';
import { favoritesReducer } from './favorites/favoritesSlise';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
        auth: persistReducer(persistConfig, authReduser),
 catalog: reducerCatalog,
   filter:reducerFilter,
  favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
