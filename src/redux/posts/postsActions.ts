import { createAction } from '@reduxjs/toolkit';
import { PostType, CommentType, ServerErrorResponse } from '../index';

const fetchPostsRequest = createAction('posts/fetchPostsRequest');
const fetchPostsSuccess = createAction<PostType[], string>(
  'posts/fetchPostsSuccess',
);
const fetchPostsError = createAction<ServerErrorResponse, string>(
  'posts/fetchPostsError',
);

const fetchCommentsRequest = createAction('posts/fetchCommentsRequest');
const fetchCommentsSuccess = createAction<PostType, string>(
  'posts/fetchCommentsSuccess',
);
const fetchCommentsError = createAction<ServerErrorResponse, string>(
  'posts/fetchCommentsError',
);

const createPostRequest = createAction('posts/createPostRequest');
const createPostSuccess = createAction<PostType, string>(
  'posts/createPostSuccess',
);
const createPostError = createAction<ServerErrorResponse, string>(
  'posts/createPostError',
);

const removePostRequest = createAction('posts/removePostRequest');
const removePostSuccess = createAction<number, string>(
  'posts/removePostSuccess',
);
const removePostError = createAction<ServerErrorResponse, string>(
  'posts/removePostError',
);

const createNewCommentRequest = createAction('posts/createNewCommentRequest');
const createNewCommentSuccess = createAction<CommentType, string>(
  'posts/createNewCommentSuccess',
);
const createNewCommentError = createAction<ServerErrorResponse, string>(
  'posts/createNewCommentError',
);

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
