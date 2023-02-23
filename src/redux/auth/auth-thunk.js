import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpUser, getInfoUsers, logoutUsers, token, loginUsers } from 'services/phonebook-api';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpUser(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk('auth/login', 
async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUsers(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  } );

  export const logOutThunk = createAsyncThunk(
      "auth/logout",
      async (_, { rejectWithValue }) => {
        try {
           await logoutUsers();
           token.unSet()
        } catch (error) {
          return rejectWithValue(error.message);
        }
      }
    );

    export const refreshUserThunk = createAsyncThunk(
        "auth/refreshUser",
        async (_, { rejectWithValue, getState }) => {
          try {
            const savedToken = getState().auth.token;
            if (!savedToken) {
              return rejectWithValue("there is no token");
            }
            token.set(savedToken);
            const data = await getInfoUsers();
            return data;
          } catch (error) {
            return rejectWithValue(error.message);
          }
        }
      );