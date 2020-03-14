import { createReducer } from '@reduxjs/toolkit';
import { getAllPosts, getAllPostsError } from './actions';

export const posts = createReducer([], {
  [getAllPosts.type]: (state, action) => action.payload,
  [getAllPosts.type]: (state, action) => {
    return state.filter(post => post.id !== action.payload);
  },
});

export const error = createReducer(null, {
  [getAllPostsError.type]: (state, action) => action.payload,
});
