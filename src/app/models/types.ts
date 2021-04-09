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

export enum USER_ENDPOINTS {
  GET = 'users',
  UPDATE_DELETE = 'admins/users',
}

export enum LOGOS_ENDPOINTS {
  GET_CREATE = 'api/logos',
  RATE = 'api/logos/rate',
}

export type END_POINTS = AUTH_ENDPOINTS | USER_ENDPOINTS | LOGOS_ENDPOINTS;

export interface ApiRequest {
  method: HTTP_METHODS;
  endpoint: END_POINTS;
  params?: any;
  body?: any;
}

