export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

export enum AUTH_ENDPOINTS {
  LOGIN = 'auth',
  REGISTER = 'auth/register',
  AUTHENTICATE= 'auth/authenticate',
}

export type END_POINTS = AUTH_ENDPOINTS;

export interface ApiRequest {
  method: HTTP_METHODS;
  endpoint: END_POINTS;
  params?: any;
  body?: any;
}

