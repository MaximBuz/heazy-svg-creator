import React, { useContext, useState, useEffect, ReactNode } from 'react';

/* FIREBASE */
import { auth } from '../firebase';
import {
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 onAuthStateChanged,
 signOut,
 sendPasswordResetEmail,
 User,
 UserCredential
} from 'firebase/auth';

interface IAuth {
  currentUser: User;
  signup: (email: string, password: string) => Promise<UserCredential>
  login: (email: string, password: string) => Promise<UserCredential>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = React.createContext(null);

export function useAuth() {
 return useContext(AuthContext);
}

export function AuthProvider({ children }) {
 const [currentUser, setCurrentUser] = useState<User>();
 const [loading, setLoading] = useState<boolean>(true);

 function signup(email, password): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password);
 }

 function login(email, password): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
 }

 function logout(): Promise<void> {
  return signOut(auth);
 }

 function resetPassword( email ): Promise<void> {
  return sendPasswordResetEmail(auth, email)
 }

 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
   setCurrentUser(user);
   setLoading(false);
  });
 }, []);

 const value: IAuth = {
  currentUser,
  signup,
  login,
  logout,
  resetPassword
 };

 return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}