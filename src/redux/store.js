import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import postsReducer from './posts/postsReducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    postsStore: postsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
