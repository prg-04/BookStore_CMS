import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import books from '../../constants/constants';

const initialState = books;
let id;

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const getId = async () => {
  const response = await axios.post(baseUrl);
  return response.data;
};

export const getBooks = createAsyncThunk('/book/getBooks', async () => {
  id = await getId();
  const res = axios.get(`${baseUrl}/${id}/books`);
  return res.data;
});

export const addBook = createAsyncThunk('/book/addBook', async (bookData) => {
  id = await getId();
  const post = await axios.post(`${baseUrl}/${id}/books`, {
    item_id: bookData.id,
    title: bookData.title,
    author: bookData.author,
    category: bookData.category,
  });

  return post.data;
});

export const removeBook = createAsyncThunk(
  '/book/removeBook',
  async (bookId) => {
    const deleteBook = await axios.delete(`${baseUrl}/${id}/books/${bookId}`);
    return deleteBook.data;
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, () => {})
      .addCase(getBooks.fulfilled, (action) => action.payload)
      .addCase(getBooks.rejected, () => {})
      .addCase(addBook.pending, () => {})
      .addCase(addBook.fulfilled, () => {})
      .addCase(addBook.rejected, () => {});
  },
});

export default bookSlice.reducer;
