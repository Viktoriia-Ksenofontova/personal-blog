import axios from 'axios';
import actions from './postsActions';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const fetchPosts = () => async dispatch => {
  dispatch(actions.fetchPostsRequest());

  try {
    const response = await axios.get('/posts');
    if (response.data) {
      dispatch(actions.fetchPostsSuccess(data));
    }
  } catch (error) {
    dispatch(actions.fetchPostsError(error));
  }
};

const createPost = (title, body) => async dispatch => {
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

const removePost = postId => async dispatch => {
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

export default {
  fetchPosts,
  createPost,
  removePost,
};
