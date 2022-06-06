import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Maxim',
    email: 'maxim@gmail.com',
    firebaseId: "ipwbeufpwiefub",
    bubbles: {
      create: [
        {
          name: 'Bubble Design',
          seed: 1,
          stroke: false,
          solid: 0,
          strokeWidth: 1,
          velocity: 50,
          size: 150,
          startColor: '#001e35',
          endColor: '#001b2f',
          bgColor: '#FBAE3C',
          shadowX: 0,
          shadowY: 0,
          shadowSD: 10,
          shadowColor: '#00000000',
        },
        {
          name: 'Different Bubbles',
          seed: 2,
          stroke: true,
          solid: 0,
          strokeWidth: 1,
          velocity: 50,
          size: 250,
          startColor: '#001e35',
          endColor: '#001b2f',
          bgColor: '#FBAE3C',
          shadowX: 1,
          shadowY: 1,
          shadowSD: 15,
          shadowColor: '#00000000',
        },
      ],
    },
  },
  {
    firstName: 'Peter',
    email: 'peter@gmail.com',
    firebaseId: "aelikeaoq3q",
    bubbles: {
      create: [
        {
          name: 'Peters bubble Design',
          seed: 1,
          stroke: false,
          solid: 0,
          strokeWidth: 1,
          velocity: 50,
          size: 150,
          startColor: '#001e35',
          endColor: '#001b2f',
          bgColor: '#FBAE3C',
          shadowX: 0,
          shadowY: 0,
          shadowSD: 10,
          shadowColor: '#00000000',
        },
        {
          name: 'peters second Bubbles',
          seed: 2,
          stroke: true,
          solid: 0,
          strokeWidth: 1,
          velocity: 50,
          size: 250,
          startColor: '#001e35',
          endColor: '#001b2f',
          bgColor: '#FBAE3C',
          shadowX: 1,
          shadowY: 1,
          shadowSD: 15,
          shadowColor: '#00000000',
        },
      ],
    },
  },
  {
    firstName: 'Hanni',
    email: 'hanni@gmail.com',
    firebaseId: "23p7erbh32pi7",
    waves: {
      create: {
        name: 'Different wave',
        seed: 1,
        stroke: false,
        solid: 0,
        strokeWidth: 1,
        strokeShrink: false,
        balance: 0.5,
        velocity: 1,
        breaks: 4,
        stacks: 2,
        distance: 100,
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
  },
];

async function main() {
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
