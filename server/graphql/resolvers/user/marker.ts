import { User } from '@prisma/client';
import { Context } from '../../../context';

export async function markers (_parent: User, _args: any, context: Context) {
  const markers = await context.prisma.markerOptions.findMany({
    where: { userId: _parent.id },
  });
  return markers;
}