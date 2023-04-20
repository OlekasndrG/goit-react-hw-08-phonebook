import { createAsyncThunk } from '@reduxjs/toolkit';
// import { userAPI } from './userAPI';
import axios from 'axios';

// const baseUrl = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// fetch('', {
//   method: 'POST',
//   headers: `Bearer ${token}`,
// });

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
// First, create the thunk
export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('users/signup', newUser);
      token.set(response.data.token);
      console.log(response.data);

      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/login',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('users/login', newUser);
      token.set(response.data.token);

      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (User, thunkAPI) => {
    try {
      const response = await axios.post('users/logout', User);
      token.unset();
      console.log(response.data);

      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCurrenUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const initialToken = state.auth.token;
    if (initialToken === null) {
      console.log('tokena net');
      console.log(state);
      return thunkAPI.rejectWithValue('value');
    }
    token.set(initialToken);
    try {
      const response = await axios.get('users/current');
      console.log(response.data);

      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
