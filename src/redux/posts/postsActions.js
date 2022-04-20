import { createAction } from '@reduxjs/toolkit';

const fetchPostsRequest = createAction('posts/fetchPostsRequest');
const fetchPostsSuccess = createAction('posts/fetchPostsSuccess');
const fetchPostsError = createAction('posts/fetchPostsError');

const createPostRequest = createAction('posts/createPostRequest');
const createPostSuccess = createAction('posts/createPostSuccess');
const createPostError = createAction('posts/createPostError');

const removePostRequest = createAction('posts/removePostRequest');
const removePostSuccess = createAction('posts/removePostSuccess');
const removePostError = createAction('posts/removePostError');

export default {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  createPostRequest,
  createPostSuccess,
  createPostError,
  removePostRequest,
  removePostSuccess,
  removePostError,
};
