import { makeAutoObservable, runInAction } from 'mobx';

import fetchPosts from "../services/postsApi";

export class PostsStore {
  posts = [];

  status = ""; // "success"; "pending"; "error"
  
  constructor() {
    makeAutoObservable(this);
    this.fetchPosts = fetchPosts;
    this.fetchAllPosts()
  }

  fetchAllPosts() {
    this.status = "pending";
    this.fetchPosts("/posts").then(res => {
      runInAction(() => {
        this.posts = res.posts;
        this.status = res.status;
      })
    })
  }

  get allPosts() {
    return this.posts;
  }
}

const mainPostsStore = new PostsStore()

export default mainPostsStore;