import { configureStore } from '@reduxjs/toolkit';
import blogListReducer from './blogListSlice'


export default configureStore({
  reducer: {
    blogList: blogListReducer,
  },
});
