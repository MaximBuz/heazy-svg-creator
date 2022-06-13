"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const User_1 = require("./User");
const Design_1 = require("./Design");
exports.Mutation = {
    createNewUser: User_1.createNewUser,
    updateUser: User_1.updateUser,
    createNewDesign: Design_1.createNewDesign,
    updateDesign: Design_1.updateDesign,
    incrementTimesCopied: Design_1.incrementTimesCopied,
};
