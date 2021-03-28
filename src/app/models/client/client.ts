export interface Client {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  avatar: string;
  isAdmin: boolean;
  session_key?: string;
}
