import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewBubble (_parent: any, _args: Prisma.BubbleOptionsCreateInput, context: Context) {
  const bubble = await context.prisma.bubbleOptions.create({
    data: { ..._args },
  });
  return bubble;
}
