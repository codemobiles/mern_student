export interface User {
  username: string;
  password: string;
  type?: UserType;
}

export enum UserType {
  normal,
  admin,
  root,
}
