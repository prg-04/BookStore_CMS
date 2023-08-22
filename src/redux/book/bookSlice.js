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

    removeBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
