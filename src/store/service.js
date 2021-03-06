import { runInAction } from 'mobx';
import axios from 'axios';
import PostsStore from './PostStore';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

class Service extends PostsStore {
  handleError(err) {
    runInAction(() => {
      this.error = err.message;
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
      const response = await axios.get('/posts');
      if (response.data) {
        this.setPosts(response.data);
        this.handleSuccess();
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  async fetchCommentsAction(postId) {
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

  async createNewComment(postId, body) {
    try {
      const response = await axios.post('/comments', {
        postId,
        body,
      });
      if (response.data) {
        const newActivePost = { ...this.postForRender };
        newActivePost.comments.push(response.data);

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

  async createNewPost(title, body) {
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

  async removePost(postId) {
    try {
      const response = await axios.delete(`/posts/${postId}`);
      if (response) {
        const updatedPosts = [...this.allPosts]
          .reverse()
          .filter(post => post.id !== postId);
        this.setPosts(updatedPosts);
        this.handleSuccess();
      }
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default Service;
