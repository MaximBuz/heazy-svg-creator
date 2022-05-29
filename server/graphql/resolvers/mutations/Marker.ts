import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewMarker (_parent: any, _args: Prisma.MarkerOptionsCreateInput, context: Context) {
  const marker = await context.prisma.markerOptions.create({
    data: { ..._args },
  });
  return marker;
}
