import { User, UserCredential } from 'firebase/auth';

export interface IAuth {
  currentUser: User;
  signup: (email: string, password: string, firstName: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}
