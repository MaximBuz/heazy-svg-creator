import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewCorners (_parent: any, _args: Prisma.CornerOptionsCreateInput, context: Context) {
  const corners = await context.prisma.cornerOptions.create({
    data: { ..._args },
  });
  return corners;
}
