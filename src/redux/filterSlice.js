import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;

export const getFilter = state => state.contacts.filter;
