import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.designType.create({ data: { name: 'waves' } });
  await prisma.designType.create({ data: { name: 'bubble' } });
  await prisma.designType.create({ data: { name: 'corners' } });
  await prisma.designType.create({ data: { name: 'marker' } });
  await prisma.designType.create({ data: { name: 'isolines' } });
  await prisma.designType.create({ data: { name: 'flare' } });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
