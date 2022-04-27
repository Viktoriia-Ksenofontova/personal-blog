type BaseObject<K extends string = string, V = unknown> = {
  [key in K]: V;
};

export type ThemeType = 'light' | 'dark';

export type CommentType = {
  id: number;
  body: string;
  postId: number;
};

export type PostType = {
  id: number;
  title: string;
  body: string;
  comments?: CommentType[];
};

type ErrorCodes = 400 | 401 | 403 | 500;

type ServerErrorResponse = {
  success: false;
  data: null;
  error: {
    code: ErrorCodes;
    message: string;
  };
};

type HttpBaseResponse<D> = {
  success: true;
  data: D;
  error: null;
};

type ErrorType = null | string;

type StatusType = 'success' | 'error' | 'pending' | 'created';

type ActivePostType = null | PostType;

type HttpResponse<D> = ServerErrorResponse | HttpBaseResponse<D>;
