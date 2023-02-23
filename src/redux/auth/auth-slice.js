import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logOutThunk, refreshUserThunk, signUpThunk } from './auth-thunk';

const initialState = {
  token: null,
  isLoading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })


      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        return initialState;
        
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
      })
      .addCase(refreshUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      
  },
});

export const authReduser = authSlice.reducer;
