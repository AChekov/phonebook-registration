import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filter } = contactsSlice.actions;

export const getFilter = state => state.contacts.filter;
