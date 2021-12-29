import axios from "axios";

axios.defaults.baseURL = "https://simple-blog-api.crew.red";

const fetchPosts = () => axios.get("/posts").then((response) => response.data);

export default fetchPosts;
