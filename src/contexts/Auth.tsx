import React, { useContext, useState, useEffect } from 'react';

/* FIREBASE */
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  UserCredential,
  User,
} from 'firebase/auth';

import { useCreateNewUserMutation } from '../graphql/generated';
import { endpoint, headers } from '../utils/apiConfig';

interface IAuth {
  currentUser: User;
  signup: (email: string, password: string, firstName: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = React.createContext(null);

export function useAuth() {
  return useContext<IAuth>(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const createNewUserMutation = useCreateNewUserMutation({ endpoint, fetchParams: { headers } });

  function signup(email, password, firstName): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
      createNewUserMutation.mutate({
        firebaseId: userCred.user.uid,
        email: userCred.user.email,
        firstName,
      });
      return userCred;
    });
  }

  function login(email, password): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(): Promise<void> {
    return signOut(auth);
  }

  function resetPassword(email): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const value: IAuth = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
