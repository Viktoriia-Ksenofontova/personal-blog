import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import postsReducer from './posts/postsReducer';

export const store = configureStore({
  reducer: {
    postsStore: postsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
