import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
});

export const { increment } = homeSlice.actions;

export default homeSlice.reducer;
