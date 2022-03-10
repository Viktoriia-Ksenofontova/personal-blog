import { makeObservable, observable, computed, action, toJS } from 'mobx';

class PostsStore {
  posts = [];

  activePost = {};

  error = null;

  status = '';

  constructor() {
    makeObservable(this, {
      posts: observable,
      activePost: observable,
      error: observable,
      status: observable,
      setPosts: action,
      setActivePost: action,
      setNewStatus: action,
      allPosts: computed,
      postForRender: computed,
      countOfPosts: computed,
    });
  }

  setPosts(data) {
    this.posts = data;
  }

  setActivePost(data) {
    this.activePost = { ...data };
  }

  setNewStatus(status) {
    this.status = status;
  }

  get allPosts() {
    const reversePosts = [...this.posts];
    return reversePosts.reverse();
  }

  get postForRender() {
    return toJS(this.activePost);
  }

  get countOfPosts() {
    return this.posts.length;
  }
}

export default PostsStore;
