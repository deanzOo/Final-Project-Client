export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

export enum ADMIN_AUTH_ENDPOINTS {
  LOGIN = 'admin/auth/login',
  AUTHENTICATE= 'admin/auth/authenticate',
}

export type END_POINTS = ADMIN_AUTH_ENDPOINTS;

export interface ApiRequest {
  method: HTTP_METHODS;
  endpoint: END_POINTS;
  params?: any;
  body?: any;
}

export interface ApiResponse<T> {
  success: boolean;
  result: T;
}
