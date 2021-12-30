import axios from "axios";

axios.defaults.baseURL = "https://simple-blog-api.crew.red";

const fetchPosts = async(urlPart) => {
  let posts=[];
  let status="";
  let error = null;
  try {
    await axios.get(urlPart)
      .then(response => {
        posts = [...response.data];
        status = "success";
        error = null;
      })
  }  catch (err) {
        error=err.message;
        status="error";
      } 
  return { posts, status, error };
}

export default fetchPosts;