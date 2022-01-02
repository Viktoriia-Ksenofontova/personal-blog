import axios from "axios";

axios.defaults.baseURL = "https://simple-blog-api.crew.red";

export const fetchPosts = async(urlPart) => {
  let posts=[];
  let status="";
  let error = null;
  
  try {
    await axios.get(urlPart)
      .then(response => {
        posts = response.data;
        status = "success";
        error = null;
      })
  }  catch (err) {
        error=err.message;
        status="error";
      } 
  return { posts, status, error };
}

export const createPost = async (title, body) => {
  let status = "";
  let post = {};
  let error = null;

  try {
    await axios.post("/posts", { "title": title, "body": body })
      .then((res) => {
        post = res.data;
        status = "created";
        error = null;
    })
  } catch (err) {
      error=err.message;
      status="error";
  }
  return {post, status, error };
}

