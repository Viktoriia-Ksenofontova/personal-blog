import { runInAction } from 'mobx';
import axios from 'axios';
import PostsStore, { PostType } from './PostStore';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

class Service extends PostsStore {
  handleError(error: any) {
    runInAction(() => {
      this.error = error.message;
      this.status = 'error';
    });
  }

  handleSuccess() {
    runInAction(() => {
      this.status = 'success';
      this.error = null;
    });
  }

  async fetchPostsAction() {
    this.setNewStatus('pending');

    try {
      const response = await axios.get<PostType[]>('/posts');
      if (response.data) {
        this.setPosts(response.data);
        this.handleSuccess();
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  async fetchCommentsAction(postId: number) {
    this.setNewStatus('pending');

    try {
      const response = await axios.get(`/posts/${postId}?_embed=comments`);
      if (response.data) {
        this.setActivePost(response.data);
        this.handleSuccess();
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  async createNewComment(postId: number, body: string) {
    try {
      const response = await axios.post('/comments', { postId, body });
      if (response.data && this.postForRender) {
        const newActivePost = { ...this.postForRender };
        newActivePost.comments!.push(response.data);

        this.setActivePost(newActivePost);
        runInAction(() => {
          this.status = 'created';
          this.error = null;
        });
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  async createNewPost(title: string, body: string): Promise<number> {
    let id;
    try {
      const response = await axios.post('/posts', { title, body });
      if (response.data) {
        this.setActivePost(response.data);
        this.handleSuccess();
        id = response.data.id;
      }
    } catch (error) {
      this.handleError(error);
    }
    return id;
  }

  async removePost(postId: number) {
    try {
      const response = await axios.delete(`/posts/${postId}`);
      if (response) {
        const updatedPosts = [...this.allPosts].reverse().filter(post => post.id !== postId);
        this.setPosts(updatedPosts);
        this.handleSuccess();
      }
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default Service;
