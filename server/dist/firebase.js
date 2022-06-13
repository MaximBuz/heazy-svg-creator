"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase-admin/app");
const dotenv = require('dotenv');
dotenv.config();
// const serviceAccount = require(process.env['GOOGLE_APPLICATION_CREDENTIALS'] || '');
const admin = (0, app_1.initializeApp)({
    credential: (0, app_1.applicationDefault)()
});
exports.default = admin;
