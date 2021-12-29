import axios from 'axios';
axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const fetchPosts = () => {
  return axios.get(`/posts`).then(response => response.data);
};

export default fetchPosts;
