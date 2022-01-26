type BaseObject<K, V> = {
  [key: K]: K | V;
};

// type CommentType = {
//   id: number;
//   body: string;
//   postId: number;
// };

// type PostType = {
//   id: number;
//   title: string;
//   body: string;
//   comments?: CommentType[];
// };

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

type HttpResponse<D> = ServerErrorResponse | HttpBaseResponse<D>;

// type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// type RequestConfig<B = BaseObject, Q = BaseObject> = {
//   method?: HttpMethods;
//   body?: B;
//   headers?: {
//     [k in string]: string;
//   };
//   query?: Q;
//   queryAsString?: string;
//   pathParameter?: string;
//   overrideHeaders?: boolean;
//   responseType?: 'json' | 'text' | 'blob';
// };

// type ActiveRequests = {
//   [k in string]?: AbortController;
// };

// type Loadings<L extends string> = {
//   [key in L]?: boolean;
// };

// type Errors = {
//   [k in ErrorKeys]?: string;
// };
