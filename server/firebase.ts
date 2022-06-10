import { applicationDefault, initializeApp } from 'firebase-admin/app';
const dotenv = require('dotenv');
dotenv.config();


// const serviceAccount = require(process.env['GOOGLE_APPLICATION_CREDENTIALS'] || '');

const admin = initializeApp({
  credential: applicationDefault()
});

export default admin;
