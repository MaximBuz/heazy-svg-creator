import { User } from '@prisma/client';
import { Context } from '../../../context';

export async function bubbles(_parent: User, _args: any, context: Context) {
  const bubbles = await context.prisma.bubbleOptions.findMany({
    where: { userId: _parent.id },
  });
  return bubbles;
}
