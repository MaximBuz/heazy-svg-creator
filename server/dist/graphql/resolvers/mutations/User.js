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
exports.updateUser = exports.createNewUser = void 0;
const graphql_1 = require("graphql");
function createNewUser(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield context.prisma.user.create({
            data: Object.assign({}, _args),
        });
        return user;
    });
}
exports.createNewUser = createNewUser;
function updateUser(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!context.uid)
            throw new graphql_1.GraphQLError(`Not Authorized`);
        const { userName } = _args;
        const user = yield context.prisma.user.update({
            where: { firebaseId: context.uid },
            data: { userName },
        });
        return user;
    });
}
exports.updateUser = updateUser;
