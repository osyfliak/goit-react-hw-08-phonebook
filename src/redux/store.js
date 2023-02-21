import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contact/contact-slice';
import { filterReducer } from './filter/filter-slise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
