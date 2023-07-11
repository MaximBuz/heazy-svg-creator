/* eslint-disable @typescript-eslint/no-var-requires */
import { initializeApp } from 'firebase-admin/app';
const firebaseCert = require('firebase-admin');
const dotenv = require('dotenv');
dotenv.config();

const admin = initializeApp({
  credential: firebaseCert.credential.cert(
    JSON.parse(process.env.GOOGLE_CREDS as string)
  ),
});
export default admin;
