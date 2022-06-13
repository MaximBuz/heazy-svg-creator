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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementTimesCopied = exports.updateDesign = exports.createNewDesign = void 0;
const graphql_1 = require("graphql");
function createNewDesign(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!context.uid)
            throw new graphql_1.GraphQLError(`Not Authorized`);
        const data = {
            name: _args.name,
            type: { connect: { id: _args.typeId } },
            optionParameters: _args.optionParameters,
            user: { connect: { firebaseId: context.uid } },
            thumbnailUrl: _args.thumbnailUrl,
        };
        if (_args.copiedFromUserId)
            data.copiedFrom = { connect: { id: _args.copiedFromUserId } };
        const design = yield context.prisma.design.create({ data });
        return design;
    });
}
exports.createNewDesign = createNewDesign;
function updateDesign(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!context.uid)
            throw new graphql_1.GraphQLError(`Not Authorized`);
        const { id, delete: shouldDelete } = _args, data = __rest(_args, ["id", "delete"]);
        const design = yield context.prisma.design.update({
            where: { id },
            data: Object.assign(Object.assign({}, data), { deleted: shouldDelete ? true : false }),
        });
        return design;
    });
}
exports.updateDesign = updateDesign;
function incrementTimesCopied(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!context.uid)
            throw new graphql_1.GraphQLError(`Not Authorized`);
        const design = yield context.prisma.design.update({
            where: { id: _args.id },
            data: { timesCopied: { increment: 1 } },
        });
        return design;
    });
}
exports.incrementTimesCopied = incrementTimesCopied;
