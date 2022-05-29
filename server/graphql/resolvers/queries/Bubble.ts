import { Context } from '../../../context';

export async function getBubblesByUserId(_parent: any, _args: { id: number }, context: Context) {
  const bubbles = await context.prisma.bubbleOptions.findMany({
    where: { userId: _args.id },
  });
  return bubbles;
}

export async function getBubblesByFirebaseId(_parent: any, _args: { id: string }, context: Context) {
  const bubbles = await context.prisma.bubbleOptions.findMany({
    where: {
      user: {
        firebaseId: _args.id,
      },
    },
  });
  return bubbles
}

export async function getBubbleById(_parent: any, _args: { id: number }, context: Context) {
  const bubble = await context.prisma.bubbleOptions.findFirst({
    where: { id: _args.id },
  });
  return bubble;
}
