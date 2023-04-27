import { createAsyncThunk } from '@reduxjs/toolkit';
// import { userAPI } from './userAPI';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('users/signup', newUser);
      token.set(response.data.token);
      toast.success('Registered successfully! Redirecting to Home Page ', {
        position: 'top-right',
        autoClose: 3252,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return response.data;
    } catch (e) {
      toast.error('Something went wrong ', {
        position: 'top-right',
        autoClose: 3252,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
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
      toast.success('Success! Redirecting to Home Page', {
        position: 'top-right',
        autoClose: 2252,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return response.data;
    } catch (e) {
      toast.error('Something went wrong ', {
        position: 'top-right',
        autoClose: 3252,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

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

      return response.data;
    } catch (e) {
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
      return thunkAPI.rejectWithValue();
    }
    token.set(initialToken);
    try {
      const response = await axios.get('users/current');

      // toast.success(`Welcome  ${response.data.name}`);

      return response.data;
    } catch (e) {
      // toast.failure('fetchCurrentUser', {
      //   position: 'top-right',
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'dark',
      // });
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
