import { configureStore } from '@reduxjs/toolkit';
import { error, posts } from './reducer';

export const initialState = {
  error: null,
  posts: [],
};

const store = configureStore({
  reducer: {
    error,
    posts,
  },
});

export default store;
