import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, register } from './operations';

export const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;

        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
     
     
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;

        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
     
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export const authReduser = authSlise.reducer;