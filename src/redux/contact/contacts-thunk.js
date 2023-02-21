import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  deleteContacts,
} from 'services/phonebook-api';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContacts(contact);
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContacts(id);
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);
