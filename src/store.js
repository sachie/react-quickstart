import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'pages/Home/homeSlice';

export default configureStore({
  reducer: {
    home: homeReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
