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
        this.posts = res.posts;
        this.status = res.status;
        this.error = res.error;
      })
    })
  }

  get allPosts() {
    return this.posts;
  }

  createNewPost(title, body) {
    this.createPost(title, body).then(res => {
      
      runInAction(() => { 
        this.posts.push(res.post);
        this.status = res.status;
        this.error = res.error;
      })
    })
    
  }
}

const mainPostsStore = new PostsStore()

export default mainPostsStore;