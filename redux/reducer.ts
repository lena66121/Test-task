import { createReducer } from '@reduxjs/toolkit';
import { getAllPosts, getAllPostsError } from './actions';

export const posts = createReducer([], {
  [getAllPosts.type]: (state, action) => action.payload,
});

export const error = createReducer(null, {
  [getAllPostsError.type]: (state, action) => action.payload,
});
