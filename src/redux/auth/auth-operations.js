import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const register = createAsyncThunk('auth/register', async credential => {
  try {
    const { data } = await axios.post('/user/signup', credential);
    return data;
  } catch (error) {}
});

const login = createAsyncThunk('auth/login', async credential => {
  try {
    const { data } = await axios.post('/user/login', credential);
    return data;
  } catch (error) {}
});

const operations = { register, login };
export default operations;
