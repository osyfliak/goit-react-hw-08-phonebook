import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './contacts-thunk';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(getContactsThunk.rejected, state => {
        state.error = alert('error');
      })

      .addCase(addContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(addContactsThunk.rejected, state => {
        state.error = alert('error');
      })

      .addCase(deleteContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(deleteContactsThunk.rejected, state => {
        state.error = alert('error');
      });
  },
  // reducers:{
  //     addContactAction(state, {payload}){
  // state.items = [...state.items, payload]
  //     },
  //     deleteContactAction(state, {payload}){
  //         state.items = state.items.filter(item => item.id !== payload)
  //     }
  // }
});

// export const { addContactAction, deleteContactAction } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
