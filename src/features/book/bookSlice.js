import { createSlice } from '@reduxjs/toolkit';
import books from '../../constants/constants';

const initialState = books;

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
