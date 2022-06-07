import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const designTypeData: Prisma.DesignTypeCreateInput[] = [
  { name: 'waves' },
  { name: 'bubble' },
  { name: 'corners' },
  { name: 'marker' },
];

const userData: Prisma.UserCreateInput[] = [
  {
    firebaseId: 'ipwbeufpwiefub',
    email: 'test.maxim@heazy.com',
    userName: 'Maxim',
    designs: {
      create: [
        {
          name: 'MyFirstDesign',
          typeId: 1,
          thumbnailUrl: 'noneyet',
          optionParameters: {
            seed: 1,
            solid: true,
            strokeWidth: 1,
            strokeShrink: true,
            balance: 0.5,
            velocity: 50,
            breaks: 3,
            stacks: 3,
            distance: 10,
            smooth: 0.2,
            startColor: '#001e35',
            endColor: '#001b2f',
            bgColor: '#FBAE3C',
            shadowX: 0,
            shadowY: 0,
            shadowSD: 10,
            shadowColor: '#00000000',
          },
        },
        {
          name: 'MySecondDesign',
          typeId: 2,
          thumbnailUrl: 'noneyet',
          optionParameters: {
            seed: 1,
            solid: true,
            strokeWidth: 1,
            velocity: 50,
            size: 10,
            startColor: '#001e35',
            endColor: '#001b2f',
            bgColor: '#FBAE3C',
            shadowX: 0,
            shadowY: 0,
            shadowSD: 10,
            shadowColor: '#00000000',
          },
        },
      ],
    },
  },
];

async function main() {
  designTypeData.forEach(async (type) => {
    await prisma.designType.create({ data: type });
  });
  userData.forEach(async (user) => {
    await prisma.user.create({ data: user });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
