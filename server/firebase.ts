import { applicationDefault, initializeApp } from 'firebase-admin/app';
var firebaseCert = require('firebase-admin');
const dotenv = require('dotenv');
dotenv.config();

const admin = initializeApp({
  credential: firebaseCert.credential.cert(JSON.parse(process.env.GOOGLE_CREDS)),
});

export default admin;
