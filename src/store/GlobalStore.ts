import ThemeStore from './ThemeStore';
import PostsStore from './service';

export class GlobalStore {
  themeStore: ThemeStore;

  postsStore: PostsStore;

  constructor() {
    this.themeStore = new ThemeStore();
    this.postsStore = new PostsStore();
  }
}
