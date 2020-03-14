import { configureStore } from '@reduxjs/toolkit';
import { error, posts } from './reducer';

const store = configureStore({
  reducer: {
    error,
    posts,
  },
});

export default store;
