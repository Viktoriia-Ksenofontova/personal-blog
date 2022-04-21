import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './postsActions';

const posts = createReducer([], {
  [actions.fetchPostsSuccess]: (_, { payload }) => payload,
  [actions.createPostSuccess]: (state, action) => [...state, action.payload],
  [actions.removePostSuccess]: (state, action) =>
    state.filter(post => post.id !== action.payload),
});

const error = createReducer(null, {
  [actions.fetchPostsRequest]: () => null,
  [actions.fetchPostsSuccess]: () => null,
  [actions.fetchPostsError]: (_, { payload }) => payload.message,
  [actions.fetchCommentsRequest]: () => null,
  [actions.fetchCommentsSuccess]: () => null,
  [actions.fetchCommentsError]: (_, { payload }) => payload.message,
  [actions.createPostRequest]: () => null,
  [actions.createPostSuccess]: () => null,
  [actions.createPostError]: (_, { payload }) => payload.message,
  [actions.removePostError]: (_, { payload }) => payload.message,
  [actions.removePostRequest]: () => null,
  [actions.removePostSuccess]: () => null,
});

const status = createReducer('pending', {
  [actions.fetchPostsRequest]: () => 'pending',
  [actions.fetchPostsSuccess]: () => 'success',
  [actions.fetchPostsError]: () => 'error',
  [actions.fetchCommentsRequest]: () => 'pending',
  [actions.fetchCommentsSuccess]: () => 'success',
  [actions.fetchCommentsError]: () => 'error',
  [actions.createPostRequest]: () => 'pending',
  [actions.createPostSuccess]: () => 'success',
  [actions.createPostError]: () => 'error',
  [actions.removePostRequest]: () => 'pending',
  [actions.removePostSuccess]: () => 'success',
  [actions.removePostError]: () => 'error',
});

const activePost = createReducer(null, {
  [actions.fetchCommentsSuccess]: (_, { payload }) => payload,

  // [actions.createPostSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  posts,
  activePost,
  error,
  status,
});
