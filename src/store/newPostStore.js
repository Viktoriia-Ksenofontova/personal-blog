import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

axios.defaults.baseURL = "https://simple-blog-api.crew.red";

class PostsStore {
  posts = [];

  comments = [];

  error = null;

  status = "";

  constructor() {
     makeAutoObservable(this);
  };

  createNewPost = async (title, body) => {
    try {
      await axios.post("/posts", { "title": title, "body": body })
        .then((res) => {
          runInAction(() => {
            this.posts.push(res.data);
            this.status = "created";
            this.error = null;
          })
        })
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.status = "error";
      })
    }
  };
 
  updatePost({ postId, update }) {
    const postIndex = this.posts.findIndex((post) => post.id === postId);
    this.posts[postIndex] = update;
  };

  deletePost(postId) {
    const postIndex = this.posts.findIndex((post) => post.id === postId);
    if (postIndex > -1) {
      this.posts.splice(postIndex, 1);
    }
  };

  createNewComments = async (postId, body) => {
    try {
      await axios.post("/comments", { "postId": postId, "body": body })
        .then((res) => {
          runInAction(() => {
            this.comments.push(res.data);
            this.status = "created";
            this.error = null;
          })
        })
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.status = "error";
      })
    }
  };
  
  getPostsFromServer = async () => {
    this.status = "pending";
    try {
      await axios.get("/posts")
        .then(response => {
          runInAction(() => {
            this.posts = response.data;
            this.status = "success";
            this.error = null;
          })
        })
    } catch (err) {
      runInAction(() => {
        this.status = "error";
        this.error = err.message;
      })
    }
  };

  getCommentsFromServerByPostId = async (postId) => {
    try {
      await axios.get(`/posts/${postId}?_embed=comments`)
        .then((res) => {
          runInAction(() => {
            this.comments = res.data.comments;
            this.status = "success";
            this.error = null;
          })
        })
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.status = "error";
      })
    }
  };
  
  deletePostFromServer = async (postId) => {
    try {
      await axios.delete(`/posts/${postId}`)
        .then(() => {
          runInAction(() => {
            this.deletePost(postId);
            this.status = "success";
            this.error = null;
          })
        })
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.status = "error";
      })
    }
 
  };
  
  get allPosts() {
    const reversePosts = [...this.posts];
    return reversePosts.reverse();
  };

  get countOfPosts() {
    return this.posts.length;
  };
};

const postsStore = new PostsStore();


export default postsStore;