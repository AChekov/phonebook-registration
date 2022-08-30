import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credential => {
  try {
    const { data } = await axios.post('/users/signup', credential);
    return data;
  } catch (error) {
    console.log('register :', error);
  }
});

const logIn = createAsyncThunk('auth/login', async credential => {
  try {
    const { data } = await axios.post('/users/login', credential);
    return data;
  } catch (error) {
    console.log('register :', error);
  }
});

const operations = { register, logIn };
export default operations;
