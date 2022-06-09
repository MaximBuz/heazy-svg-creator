import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput = {
  firebaseId: 'L3sVgPJtaQYSTjxjUdqeBZC2ylX2',
  email: 'mbuz.maxim@gmail.com',
  userName: 'codenameVandal',
};

async function main() {
  await prisma.designType.createMany({
    data: [{ name: 'waves' }, { name: 'bubble' }, { name: 'corners' }, { name: 'marker' }],
  });
  await prisma.user.create({ data: userData });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
