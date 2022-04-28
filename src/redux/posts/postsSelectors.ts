import { RootState } from '../store';
import { PostType } from '../types';

export const getAllPosts = (state: RootState): PostType[] | [] =>
  state.postsStore.posts;

export const getStatus = (state: RootState) => state.postsStore.status;

export const getActivePost = (state: RootState): null | PostType =>
  state.postsStore.activePost;

export const getErrorMessage = (state: RootState): null | string =>
  state.postsStore.error;
