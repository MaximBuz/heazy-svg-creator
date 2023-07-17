import { GetUserByFirebaseIdQuery } from './../../graphql/generated';
import { User, UserCredential } from 'firebase/auth';

export interface IAuth {
  firebaseUser: User;
  currentUserLoading: boolean;
  currentUserIsError: boolean;
  currentUserIsSuccess: boolean;
  currentUser: GetUserByFirebaseIdQuery['user'];
  signup: (
    email: string,
    password: string,
    firstName: string
  ) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  resendEmailVerififaction: () => Promise<void>;
  idToken: string;
}
