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

import {
  useCreateNewUserMutation,
  useGetUserByFirebaseIdQuery,
} from '../graphql/generated';
import { endpoint, headers } from '../utils/apiConfig';
import { IAuth } from './types/AuthContext.types';
import { useQueryClient } from 'react-query';
import { useEventLogger } from '../hooks/useEventLogger';

const AuthContext = React.createContext(null);

/* ----- HOOK ----- */
export function useAuth() {
  return useContext<IAuth>(AuthContext);
}

/* ----- PROVIDER ----- */
export function AuthProvider({ children }) {
  const queryClient = useQueryClient();

  const [firebaseUser, setFirebaseUUser] = useState<User>();
  const [idToken, setIdToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Analytics
  const { sendEventLog } = useEventLogger();

  // Queries
  const userQuery = useGetUserByFirebaseIdQuery({
    endpoint,
    fetchParams: { headers: headers(idToken) },
  });

  useEffect(() => {
    if (idToken) {
      userQuery.refetch();
    }
  }, [idToken]);

  // Mutations
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
        sendEventLog('register', { userCred });
        sendEmailVerification(auth.currentUser);
        return userCred;
      });
  }
  function resendEmailVerififaction(): Promise<void> {
    return sendEmailVerification(auth.currentUser).then(() => {
      sendEventLog('resend_email_verification', {
        user: auth.currentUser,
      });
    });
  }

  function login(email, password): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCred) => {
        sendEventLog('login', { userCred });
        return userCred;
      }
    );
  }

  function logout(): Promise<void> {
    const loggedOutUser = auth.currentUser;
    return signOut(auth).then(() => {
      sendEventLog('logout', { loggedOutUser });
      queryClient.removeQueries();
    });
  }

  function resetPassword(email): Promise<void> {
    return sendPasswordResetEmail(auth, email).then(() =>
      sendEventLog('reset_password', { user: auth.currentUser })
    );
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user
          .getIdToken(true)
          .then((idToken) => {
            setFirebaseUUser(user);
            setIdToken(idToken);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      } else {
        setIdToken(undefined);
        setFirebaseUUser(undefined);
        setLoading(false);
      }
    });
  }, []);

  const value: IAuth = {
    idToken,
    firebaseUser,
    currentUserLoading: userQuery.isLoading,
    currentUserIsError: userQuery.isError,
    currentUserIsSuccess: userQuery.isSuccess,
    currentUser: userQuery?.data?.user,
    signup,
    login,
    logout,
    resetPassword,
    resendEmailVerififaction,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
