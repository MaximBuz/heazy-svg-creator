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
exports.User = void 0;
const graphql_1 = require("graphql");
exports.User = {
    designs(_parent, _args, context) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!context.uid)
                throw new graphql_1.GraphQLError(`Not Authorized`);
            const designs = yield context.prisma.design.findMany({
                where: { userId: _parent.id, deleted: false },
                orderBy: { createdAt: 'desc' },
                include: { copiedFrom: true, type: true },
            });
            return designs;
        });
    },
};
