export default {
  defaults: {
    baseURL: 'https://simple-blog-api.crew.red',
  },
  get: jest.fn(url => {
    if (url === '/posts') {
      return Promise.resolve({
        data: [],
      });
    } else if (url === '/posts/1?_embed=comments') {
      return Promise.resolve({
        data: {},
      });
    }
  }),

  post: jest.fn(url => {
    if (url === '/comments') {
      return Promise.resolve({
        data: {},
      });
    }
  }),
};
