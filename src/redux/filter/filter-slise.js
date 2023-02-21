import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContactsActions(_, { payload }) {
      return payload;
    },
  },
});

export const { filterContactsActions } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
