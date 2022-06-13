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
exports.getDesignById = exports.getPublicDesigns = void 0;
function getPublicDesigns(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        // Grabbing arguments
        const sortBy = _args.sortBy || 'timesCopied';
        const take = _args.take || 3;
        const type = _args.type || [1, 2, 3, 4];
        const cursor = _args.cursor || null;
        const searchParams = {
            take,
            where: { public: true, deleted: false, type: { id: { in: type } } },
            orderBy: { [sortBy]: 'desc' },
        };
        if (cursor) {
            searchParams.cursor = {
                id: cursor,
            };
            searchParams.skip = 1;
        }
        const designs = yield context.prisma.design.findMany(searchParams);
        return designs;
    });
}
exports.getPublicDesigns = getPublicDesigns;
function getDesignById(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const design = yield context.prisma.design.findFirst({
            where: {
                OR: [
                    { public: true, id: _args.id, deleted: false },
                    { user: { firebaseId: context.uid }, id: _args.id, deleted: false },
                ],
            },
        });
        return design;
    });
}
exports.getDesignById = getDesignById;
