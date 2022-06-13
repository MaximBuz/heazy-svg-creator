import { applicationDefault, initializeApp } from 'firebase-admin/app';
var firebaseCert = require('firebase-admin');
const dotenv = require('dotenv');
dotenv.config();
// @ts-ignore
console.log(JSON.parse(process.env.GOOGLE_CREDS));
const admin = initializeApp({
  // @ts-ignore
  credential: firebaseCert.credential.cert(JSON.parse(process.env.GOOGLE_CREDS)),
});
export default admin;
