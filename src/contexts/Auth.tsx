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
import { logEvent } from 'firebase/analytics';
import { useCookies } from './Cookies';

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

  // Analytics
  const cookies = useCookies();

  // Queries
  const queryClient = useQueryClient();
  const createNewUserMutation = useCreateNewUserMutation({
    endpoint,
    fetchParams: { headers: headers(idToken) },
  });

  function signup(email, password, userName): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        createNewUserMutation.mutate({
          firebaseId: userCred.user.uid,
          email: userCred.user.email,
          userName,
          avatarUrl: String(userCred.user.photoURL),
        });
        return userCred;
      })
      .then((userCred) => {
        cookies.consent && cookies.analytics && logEvent(cookies.analytics, 'register', { userCred });
        sendEmailVerification(auth.currentUser);
        return userCred;
      });
  }
  function resendEmailVerififaction(): Promise<void> {
    return sendEmailVerification(auth.currentUser).then(() => {
      cookies.consent && cookies.analytics && logEvent(cookies.analytics, 'resend_email_verification', { user: auth.currentUser });
    });
  }

  function login(email, password): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password).then((userCred) => {
      cookies.consent && cookies.analytics && logEvent(cookies.analytics, 'login', { userCred });
      return userCred;
    });
  }

  function logout(): Promise<void> {
    const loggedOutUser = auth.currentUser;
    return signOut(auth).then(() => {
      cookies.consent && cookies.analytics && logEvent(cookies.analytics, 'logout', { user: loggedOutUser });
      queryClient.removeQueries();
    });
  }

  function resetPassword(email): Promise<void> {
    return sendPasswordResetEmail(auth, email).then(() =>
      cookies.consent && cookies.analytics && logEvent(cookies.analytics, 'reset_password', { user: auth.currentUser })
    );
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
    resendEmailVerififaction
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
