import { initializeApp } from 'firebase-admin/app';
import firebaseCert from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

const admin = initializeApp({
  credential: firebaseCert.credential.cert(
    JSON.parse(process.env.GOOGLE_CREDS as string)
  ),
});
export default admin;
