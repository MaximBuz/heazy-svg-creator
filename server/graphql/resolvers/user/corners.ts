import { User } from '@prisma/client';
import { Context } from '../../../context';

export async function corners (_parent: User, _args: any, context: Context) {
  const corners = await context.prisma.cornerOptions.findMany({
    where: { userId: _parent.id },
  });
  return corners;
}