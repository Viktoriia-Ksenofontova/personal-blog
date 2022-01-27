import { runInAction } from 'mobx';
import axios from 'axios';
import PostsStore, { PostType, CommentType } from './PostStore';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

// type ErrorCodes = 400 | 401 | 403 | 500;

// type ServerErrorResponse = {
//   success: false;
//   data: null;
//   error: {
//     code: ErrorCodes;
//     message: string;
//   };
// };

// type HttpBaseResponse<D> = {
//   success: true;
//   data: D;
//   error: null;
// };
// type HttpResponse<D> = ServerErrorResponse | HttpBaseResponse<D>;

class Service extends PostsStore {
  handleError(error: ServerErrorResponse): void {
    runInAction(() => {
      this.error = error.error.message;
      this.status = 'error';
    });
  }

  handleSuccess(): void {
    runInAction(() => {
      this.status = 'success';
      this.error = null;
    });
  }

  async fetchPostsAction(): Promise<void> {
    this.setNewStatus('pending');

    try {
      const response = await axios.get<PostType[], HttpResponse<PostType[]>>('/posts');
      if (response.data) {
        this.setPosts(response.data);
        this.handleSuccess();
      }
    } catch (error) {
      this.handleError(error as ServerErrorResponse);
    }
  }

  async fetchCommentsAction(postId: number): Promise<void> {
    this.setNewStatus('pending');

    try {
      const response = await axios.get<PostType, HttpResponse<PostType>>(
        `/posts/${postId}?_embed=comments`,
      );
      if (response.data) {
        this.setActivePost(response.data);
        this.handleSuccess();
      }
    } catch (error) {
      this.handleError(error as ServerErrorResponse);
    }
  }

  async createNewComment(postId: number, body: string): Promise<void> {
    try {
      const response = await axios.post<CommentType, HttpResponse<CommentType>>('/comments', {
        postId,
        body,
      });
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
      this.handleError(error as ServerErrorResponse);
    }
  }

  async createNewPost(title: string, body: string): Promise<number | undefined> {
    let id;
    try {
      const { data } = await axios.post<PostType, HttpResponse<PostType>>('/posts', {
        title,
        body,
      });
      if (data) {
        this.setActivePost(data);
        this.handleSuccess();
        id = data.id;
      }
    } catch (error) {
      this.handleError(error as ServerErrorResponse);
    }
    return id;
  }

  async removePost(postId: number): Promise<void> {
    try {
      const response = await axios.delete<BaseObject, HttpResponse<BaseObject>>(`/posts/${postId}`);
      if (response) {
        const updatedPosts = [...this.allPosts].reverse().filter(post => post.id !== postId);
        this.setPosts(updatedPosts);
        this.handleSuccess();
      }
    } catch (error) {
      this.handleError(error as ServerErrorResponse);
    }
  }
}

export default Service;
