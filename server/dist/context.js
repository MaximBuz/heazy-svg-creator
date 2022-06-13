"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.context = { prisma };
