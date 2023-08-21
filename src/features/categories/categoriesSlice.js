// categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryStatus: () => 'Under construction',
  },
});

export const { getCategoryStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
