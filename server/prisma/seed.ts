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
  designs: {
    create: [
      {
        name: 'Coolest Waves',
        typeId: 1,
        thumbnailUrl: 'null',
        optionParameters: {
          solid: true,
          bgColor: '#002438',
          startColor: '#ff0005ff',
          endColor: '#ff0092ff',
          shadowX: 0,
          shadowY: 0,
          shadowSD: 10,
          shadowColor: '#00000061',
          balance: 0.5,
          velocity: 1,
          breaks: 4,
          stacks: 2,
          distance: 100,
          strokeShrink: false,
          strokeWidth: 1,
          smooth: 0.2,
        },
      },
      {
        name: 'Coolest Bubble',
        typeId: 2,
        thumbnailUrl: 'null',
        public: true,
        optionParameters: {
          solid: true,
          size: 150,
          bgColor: '#FBAE3C',
          startColor: '#001e35',
          endColor: '#001b2f',
          shadowX: 0,
          shadowY: 0,
          shadowSD: 10,
          shadowColor: '#00000000',
          velocity: 50,
          strokeWidth: 1,
        },
      },
      {
        name: 'Coolest Corners',
        typeId: 3,
        thumbnailUrl: 'null',
        optionParameters: {
          solid: true,
          topLeftCorner: true,
          topRightCorner: false,
          bottomLeftCorner: false,
          bottomRightCorner: true,
          mirror: false,
          bgColor: '#ff0071ff',
          startColor: '#95ffda',
          endColor: '#95ffa1ff',
          shadowX: 0,
          shadowY: 0,
          shadowSD: 10,
          shadowColor: '#00000061',
          balance: 0.3,
          velocity: 1,
          breaks: 4,
          stacks: 0,
          distance: 100,
          strokeShrink: false,
          strokeWidth: 1,
          smooth: 0.2,
        },
      },
      {
        name: 'Coolest Marker',
        typeId: 2,
        thumbnailUrl: 'null',
        optionParameters: {
          lineCap: 'butt',
          lineJoin: 'bevel',
          strokeWidth: 130,
          bgColor: '#ffffff',
          startColor: '#000000',
          endColor: '#000000',
          shadowX: 0,
          shadowY: 0,
          shadowSD: 10,
          shadowColor: '#00000000',
          markerHeight: 25,
          zickZacks: 10,
          ghost: true,
          ghostSize: 1.1,
          ghostStartColor: '#dedede',
          ghostEndColor: '#bdbdbd',
          padding: 30,
          mirror: false,
          yPosition: 500,
          pressure: 0,
        },
      },
    ],
  },
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
