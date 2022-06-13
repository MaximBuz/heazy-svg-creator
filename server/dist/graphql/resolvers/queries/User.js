"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUserByFirebaseId = void 0;
const graphql_1 = require("graphql");
function getUserByFirebaseId(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!context.uid)
            throw new graphql_1.GraphQLError(`Not Authorized`);
        const user = yield context.prisma.user.findFirst({
            where: { firebaseId: context.uid },
        });
        if (!user)
            throw new graphql_1.GraphQLError(`Not Authorized`);
        return user;
    });
}
exports.getUserByFirebaseId = getUserByFirebaseId;
function getUserById(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield context.prisma.user.findFirst({
            where: { id: _args.id },
        });
        if (!user)
            throw new graphql_1.GraphQLError(`Not Authorized`);
        return user;
    });
}
exports.getUserById = getUserById;
