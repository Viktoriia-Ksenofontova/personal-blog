import { makeAutoObservable, runInAction } from 'mobx';
import { fetchPosts, createPost } from "../services/postsApi";

class PostsStore {
  posts = [];

  error = null;
  
  status = ""; // "success"; "pending"; "error"
  
  constructor() {
    makeAutoObservable(this);
    this.fetchPosts = fetchPosts;
    this.createPost = createPost;
    this.fetchAllPosts()
  }

  fetchAllPosts() {
    this.status = "pending";
    this.fetchPosts("/posts").then(res => {
      runInAction(() => {
        this.posts = res.posts.reverse();
        this.status = res.status;
        this.error = res.error;
      })
    })
  }

  get allPosts() {
    return this.posts;
  }

  createNewPost(title, body) {
    this.status = "pending";
    const data= this.createPost(title, body).then(res => {
      runInAction(() => { 
        this.posts.unshift(res.post);
        this.status = res.status;
        this.error = res.error; 
      })
      return res;
    })
    return data;
  }
}

const mainPostsStore = new PostsStore()

export default mainPostsStore;