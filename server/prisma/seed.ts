import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const designTypeData: Prisma.DesignTypeCreateInput[] = [
  { name: 'waves' },
  { name: 'bubble' },
  { name: 'corners' },
  { name: 'marker' },
];

const userData: Prisma.UserCreateInput = {
  firebaseId: 'L3sVgPJtaQYSTjxjUdqeBZC2ylX2',
  email: 'mbuz.maxim@gmail.com',
  userName: 'codenameVandal',
};

async function main() {
  designTypeData.forEach(async (type) => {
    await prisma.designType.create({ data: type });
  });
  await prisma.user.create({ data: userData });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
