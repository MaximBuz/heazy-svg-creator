import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyBdYmVjjDn4faUa3P62ZO0SI_2RxJVzPnA',
  authDomain: 'heazy-64ea8.firebaseapp.com',
  projectId: 'heazy-64ea8',
  storageBucket: 'heazy-64ea8.appspot.com',
  messagingSenderId: '550718320713',
  appId: '1:550718320713:web:69a35c80fc6ee50bdb8f98',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);