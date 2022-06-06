const dotenv = require('dotenv');
dotenv.config();

var admin = require('firebase-admin');

var serviceAccount = require(process.env['GOOGLE_APPLICATION_CREDENTIALS'] || "");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;