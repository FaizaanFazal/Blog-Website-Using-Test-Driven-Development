import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import userReducer from './userSlice';

const rootReducer = {
  blog: blogReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
