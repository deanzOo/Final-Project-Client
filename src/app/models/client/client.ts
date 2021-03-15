export interface Client {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  avatar: string;
  token?: string;
}
