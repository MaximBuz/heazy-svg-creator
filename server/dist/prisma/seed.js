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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userData = {
    firebaseId: 'tlSixZcFlJaGB8P2HqmScEuXF6o1',
    email: 'mbuz.maxim@gmail.com',
    userName: 'codenameVandal',
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // await prisma.designType.createMany({
        //   data: [{ name: 'waves' }, { name: 'bubble' }, { name: 'corners' }, { name: 'marker' }, { name: 'isolines' }],
        // });
        yield prisma.user.create({ data: userData });
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect(); }));
