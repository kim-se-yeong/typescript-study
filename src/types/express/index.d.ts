import UserModel from '../../interface/user';

declare global {
  namespace Express {
    export interface User extends UserModel { }
  }
}