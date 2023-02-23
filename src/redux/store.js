import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './auth/auth-slice';
import { contactsReducer } from './contact/contact-slice';
import { filterReducer } from './filter/filter-slise';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'token',
  storage,
  whitelist:['token'],
}
const persistedReducer = persistReducer(persistConfig, authReduser)
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],}
}),
})
export const persistor = persistStore(store);