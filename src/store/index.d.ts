type BaseObject<K extends string = string, V = unknown> = {
  [key in K]: V;
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

type HttpResponse<D> = ServerErrorResponse | HttpBaseResponse<D>;
