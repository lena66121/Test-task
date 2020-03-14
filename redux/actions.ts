import { createAction } from '@reduxjs/toolkit';

export const ActionTypes = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',
  REFRESH_POSTS: 'REFRESH_POSTS',
};

export const getAllPosts = createAction<string>(ActionTypes.GET_POSTS);
export const getAllPostsError = createAction<string>(ActionTypes.GET_POSTS_ERROR);
export const refreshPosts = createAction<string>(ActionTypes.REFRESH_POSTS);
