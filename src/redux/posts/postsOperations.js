import axios from 'axios';
import actions from './postsActions';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const fetchPosts = () => async dispatch => {
  dispatch(actions.fetchPostsRequest());

  try {
    const response = await axios.get('/posts');
    if (response) {
      dispatch(actions.fetchPostsSuccess(response.data));
    }
  } catch (error) {
    dispatch(actions.fetchPostsError(error));
  }
};

export const fetchComments = postId => async dispatch => {
  dispatch(actions.fetchCommentsRequest());

  try {
    const { data } = await axios.get(`/posts/${postId}?_embed=comments`);
    if (data) {
      dispatch(actions.fetchCommentsSuccess(data));
    }
  } catch (error) {
    dispatch(actions.fetchCommentsError(error));
  }
};

export const createPost = (title, body) => async dispatch => {
  dispatch(actions.createPostRequest());

  try {
    const { data } = await axios.post('/posts', { title, body });
    if (data) {
      dispatch(actions.createPostSuccess(data));
    }
  } catch (error) {
    dispatch(actions.createPostError(error));
  }
};

export const removePost = postId => async dispatch => {
  dispatch(actions.removePostRequest());

  try {
    const response = await axios.delete(`/posts/${postId}`);
    if (response) {
      dispatch(actions.removePostSuccess(postId));
    }
  } catch (error) {
    dispatch(actions.removePostError(error));
  }
};

export const createNewComment = (postId, body) => async dispatch => {
  dispatch(actions.createNewCommentRequest());

  try {
    const response = await axios.post('/comments', {
      postId,
      body,
    });
    if (response.data) {
      dispatch(actions.createNewCommentSuccess(response.data));
    }
  } catch (error) {
    dispatch(actions.createNewCommentError(error));
  }
};
