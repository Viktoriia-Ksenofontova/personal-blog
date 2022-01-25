import React, { createContext, useMemo, useReducer } from 'react';
import { GlobalStore } from '../store/GlobalStore';

type SetTheme = {
  type: 'setTheme';
  newTheme: 'dark' | 'light';
};
type FetchPostsAction = {
  type: 'fetchPostsAction';
};
type FetchCommentsAction = {
  type: 'fetchCommentsAction';
  postId: number;
};
type CreateNewComment = {
  type: 'createNewComment';
  postId: number;
  body: string;
};
type CreateNewPost = {
  type: 'createNewPost';
  title: string;
  body: string;
};
type RemovePost = {
  type: 'removePost';
  postId: number;
};

type Actions =
  | SetTheme
  | FetchCommentsAction
  | FetchPostsAction
  | CreateNewComment
  | CreateNewPost
  | RemovePost;

type CommentType = {
  id: number;
  body: string;
  postId: number;
};

type PostType = {
  id: number;
  title: string;
  body: string;
  comments?: CommentType[];
};
type StoreType = {
  posts: PostType[];
  activePost: PostType | {};
  error: 'string' | null;
  status: 'error' | 'success' | 'pending' | 'created';
  fetchPostsAction: () => void;
  fetchCommentsAction: (postId: number) => void;
};

type InitialStateType = {
  themeStore: {
    theme: 'light' | 'dark';
    setTheme(newTheme: 'dark' | 'light'): void;
  };
  postsStore: StoreType;
};

export const GlobalContext = createContext({});
const initialState = new GlobalStore();

const reducer = (state: InitialStateType, action: Actions) => {
  switch (action.type) {
    case 'setTheme':
      state.themeStore.setTheme(action.newTheme);
      return {
        state,
      };
    case 'fetchPostsAction':
      state.postsStore.fetchPostsAction();
      return {
        themeStore: state.themeStore,
        postsStore: state.postsStore,
      };
    case 'fetchCommentsAction':
      state.postsStore.fetchCommentsAction(action.postId);
      return {
        themeStore: state.themeStore,
        postsStore: state.postsStore,
      };
    default:
      return state;
  }
};

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
