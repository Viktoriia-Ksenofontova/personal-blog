import mockAxios from 'axios';
import Service from './service';

describe('Store', () => {
  const store = new Service();

  describe('action setPosts', () => {
    test('observable posts sets correctly', () => {
      const result = [
        {
          id: 1,
          title: 'title1',
          body: 'body1',
        },
      ];
      store.setPosts(result);
      expect(store.posts).toEqual(result);
    });
  });

  describe('action setActivePost', () => {
    test('observable activePost sets correctly', () => {
      const result = {
        id: 1,
        title: 'title1',
        body: 'body1',
        comments: [{ id: 1, postId: 1, body: 'comment1' }],
      };
      store.setActivePost(result);
      expect(store.activePost).toEqual(result);
    });
  });

  describe('action setNewStatus', () => {
    test('observable status sets correctly', () => {
      const newStatus = 'success';
      store.setNewStatus(newStatus);
      expect(store.status).toEqual(newStatus);
    });
  });

  describe('fetch Posts', () => {
    test('fetches successfully posts from an API', async () => {
      // setup
      const posts = {
        data: [
          {
            id: 1,
            title: 'title1',
            body: 'body1',
          },
        ],
      };
      mockAxios.get.mockImplementationOnce(() => Promise.resolve(posts));

      // work

      await store.fetchPostsAction();

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith('/posts');
      expect(store.allPosts.length).toBe(1);
      expect(store.status).toEqual('success');
      expect(store.allPosts).toEqual(
        expect.arrayContaining([
          {
            id: 1,
            title: 'title1',
            body: 'body1',
          },
        ]),
      );
    });

    test('the fetch fails with an error', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.reject(new Error('error')),
      );

      try {
        await store.fetchPostsAction();
      } catch (e) {
        expect(e).toMatch('error');
        expect(store.status).toEqual('error');
      }
    });
  });

  describe('fetchCommentsAction', () => {
    const id = 1;

    test('success fetch comments by id', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
              title: 'title1',
              body: 'body1',
              comments: [{ id: 1, postId: 1, body: 'comment1' }],
            },
          ],
        }),
      );

      await store.fetchCommentsAction(id);

      expect(mockAxios.get).toHaveBeenCalledWith('/posts/1?_embed=comments');
      expect(store.status).toEqual('success');
    });

    test('the fetch comments fails with an error', async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.reject('error'));

      try {
        await store.fetchCommentsAction(id);
      } catch (e) {
        expect(e).toMatch('error');
        expect(store.status).toEqual('error');
      }
    });
  });

  describe('create new comment', () => {
    const comment = { postId: 1, body: 'comment2' };

    test('success create new comment', async () => {
      const data = {
        data: {
          postId: 1,
          body: 'comment2',
          id: 2,
        },
      };

      mockAxios.post.mockResolvedValueOnce(() => {
        Promise.resolve(data);
      });

      await store.createNewComment(comment.postId, comment.body);
      expect(mockAxios.post).toBeCalledTimes(1);
      expect(mockAxios.post).toHaveBeenCalledWith('/comments', comment);
    });
  });
});
