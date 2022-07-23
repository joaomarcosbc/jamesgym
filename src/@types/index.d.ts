type User = {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  iat: number;
};

declare namespace Express {
  export interface Request {
    user: User;
  }
}
