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
  sendEmailVerification,
} from 'firebase/auth';

import { useCreateNewUserMutation } from '../graphql/generated';
import { endpoint, headers } from '../utils/apiConfig';
import { IAuth } from '../types/authContext';
import { useQueryClient } from 'react-query';

const AuthContext = React.createContext(null);

/* ----- HOOK ----- */
export function useAuth() {
  return useContext<IAuth>(AuthContext);
}

/* ----- PROVIDER ----- */
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [idToken, setIdToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Queries
  const queryClient = useQueryClient();
  const createNewUserMutation = useCreateNewUserMutation({
    endpoint,
    fetchParams: { headers: headers(idToken) },
  });

  function signup(email, password, userName): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
      createNewUserMutation.mutate({
        firebaseId: userCred.user.uid,
        email: userCred.user.email,
        userName,
        avatarUrl: String(userCred.user.photoURL),
      });
      return userCred;
    }).then((userCred) => {
      sendEmailVerification(auth.currentUser);
      return userCred
    });
  }

  function login(email, password): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(): Promise<void> {
    return signOut(auth).then(() => queryClient.removeQueries());
  }

  function resetPassword(email): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user
          .getIdToken(true)
          .then((idToken) => {
            setCurrentUser(user);
            setIdToken(idToken);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      } else {
        setIdToken(undefined);
        setCurrentUser(undefined);
        setLoading(false);
      }
    });
  }, []);

  const value: IAuth = {
    idToken,
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
