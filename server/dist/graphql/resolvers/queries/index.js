"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const User_1 = require("./User");
const Design_1 = require("./Design");
const DesignType_1 = require("./DesignType");
exports.Query = {
    getUserByFirebaseId: User_1.getUserByFirebaseId,
    getUserById: User_1.getUserById,
    getPublicDesigns: Design_1.getPublicDesigns,
    getDesignById: Design_1.getDesignById,
    getDesignTypes: DesignType_1.getDesignTypes
};
