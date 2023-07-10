import { initializeApp } from 'firebase-admin/app';
const firebaseCert = require('firebase-admin');
const dotenv = require('dotenv');
dotenv.config();
// @ts-ignore
console.log(JSON.parse(process.env.GOOGLE_CREDS));
const admin = initializeApp({
  credential: firebaseCert.credential.cert(
    // @ts-ignore
    JSON.parse(process.env.GOOGLE_CREDS)
  ),
});
export default admin;
