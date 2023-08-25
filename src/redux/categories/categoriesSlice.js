import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Under Construction';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoryStatus: (state, action) => action.payload,
  },
});

export const { setCategoryStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
