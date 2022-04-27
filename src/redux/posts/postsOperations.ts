import axios from 'axios';
import actions from './postsActions';
import { AppDispatch } from '../store';
import {
  BaseObject,
  PostType,
  CommentType,
  HttpResponse,
  ServerErrorResponse,
} from '../index';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  dispatch(actions.fetchPostsRequest());

  try {
    const { data } = await axios.get<PostType[], HttpResponse<PostType[]>>(
      '/posts',
    );
    if (data) {
      dispatch(actions.fetchPostsSuccess(data));
    }
  } catch (error) {
    dispatch(actions.fetchPostsError(error as ServerErrorResponse));
  }
};

export const fetchComments =
  (postId: number) => async (dispatch: AppDispatch) => {
    dispatch(actions.fetchCommentsRequest());

    try {
      const { data } = await axios.get<PostType, HttpResponse<PostType>>(
        `/posts/${postId}?_embed=comments`,
      );
      if (data) {
        dispatch(actions.fetchCommentsSuccess(data));
      }
    } catch (error) {
      dispatch(actions.fetchCommentsError(error as ServerErrorResponse));
    }
  };

export const createPost =
  (title: string, body: string) => async (dispatch: AppDispatch) => {
    dispatch(actions.createPostRequest());

    try {
      const { data } = await axios.post<PostType, HttpResponse<PostType>>(
        '/posts',
        { title, body },
      );
      if (data) {
        dispatch(actions.createPostSuccess(data));
      }
    } catch (error) {
      dispatch(actions.createPostError(error as ServerErrorResponse));
    }
  };

export const removePost = (postId: number) => async (dispatch: AppDispatch) => {
  dispatch(actions.removePostRequest());

  try {
    const response = await axios.delete<BaseObject, HttpResponse<BaseObject>>(
      `/posts/${postId}`,
    );
    if (response) {
      dispatch(actions.removePostSuccess(postId));
    }
  } catch (error) {
    dispatch(actions.removePostError(error as ServerErrorResponse));
  }
};

export const createNewComment =
  (postId: number, body: string) => async (dispatch: AppDispatch) => {
    dispatch(actions.createNewCommentRequest());

    try {
      const response = await axios.post<CommentType, HttpResponse<CommentType>>(
        '/comments',
        {
          postId,
          body,
        },
      );
      if (response.data) {
        dispatch(actions.createNewCommentSuccess(response.data));
      }
    } catch (error) {
      dispatch(actions.createNewCommentError(error as ServerErrorResponse));
    }
  };
