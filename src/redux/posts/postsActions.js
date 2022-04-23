import { createAction } from '@reduxjs/toolkit';

const fetchPostsRequest = createAction('posts/fetchPostsRequest');
const fetchPostsSuccess = createAction('posts/fetchPostsSuccess');
const fetchPostsError = createAction('posts/fetchPostsError');

const fetchCommentsRequest = createAction('posts/fetchCommentsRequest');
const fetchCommentsSuccess = createAction('posts/fetchCommentsSuccess');
const fetchCommentsError = createAction('posts/fetchCommentsError');

const createPostRequest = createAction('posts/createPostRequest');
const createPostSuccess = createAction('posts/createPostSuccess');
const createPostError = createAction('posts/createPostError');

const removePostRequest = createAction('posts/removePostRequest');
const removePostSuccess = createAction('posts/removePostSuccess');
const removePostError = createAction('posts/removePostError');

const createNewCommentRequest = createAction('posts/createNewCommentRequest');
const createNewCommentSuccess = createAction('posts/createNewCommentSuccess');
const createNewCommentError = createAction('posts/createNewCommentError');

export default {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsError,
  createPostRequest,
  createPostSuccess,
  createPostError,
  removePostRequest,
  removePostSuccess,
  removePostError,
  createNewCommentRequest,
  createNewCommentSuccess,
  createNewCommentError,
};
