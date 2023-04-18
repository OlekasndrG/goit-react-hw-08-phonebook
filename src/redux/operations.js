import { createAsyncThunk } from '@reduxjs/toolkit';
// import { userAPI } from './userAPI';
import axios from 'axios';
// const a = {
//   createdAt: '2023-04-10T06:11:18.880Z',
//   name: 'Miriam Leffler',
//   phone: '1-572-569-3822 x758',
//   id: '11',
// };

const baseUrl = 'https://64329c803e05ff8b3729d13e.mockapi.io/contacts/contacts';
// First, create the thunk
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}`);

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
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}`, contact);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseUrl}/${contactID}`);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

