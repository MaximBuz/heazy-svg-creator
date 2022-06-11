import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput = {
  firebaseId: 'tlSixZcFlJaGB8P2HqmScEuXF6o1',
  email: 'mbuz.maxim@gmail.com',
  userName: 'codenameVandal',
};

async function main() {
  await prisma.designType.createMany({
    data: [{ name: 'waves' }, { name: 'bubble' }, { name: 'corners' }, { name: 'marker' }, { name: 'isolines' }],
  });
  await prisma.user.create({ data: userData });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
