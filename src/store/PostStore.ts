import { makeObservable, observable, computed, action, toJS } from 'mobx';

type CommentType = {
  id: number;
  body: string;
  postId: number;
};

type PostType = {
  id: number;
  title: string;
  body: string;
  comments?: CommentType[];
};

export default class PostsStore {
  posts: PostType[] = [];

  activePost: PostType | null = null;

  error: string | null = null;

  status: 'success' | 'error' | 'pending' | 'created' = 'pending';

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

  setPosts(data: PostType[]) {
    this.posts = data;
  }

  setActivePost(data: PostType) {
    this.activePost = { ...data };
  }

  setNewStatus(status: 'success' | 'error' | 'pending' | 'created') {
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
