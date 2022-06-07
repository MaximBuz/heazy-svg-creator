import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewDesign(_parent: any, _args: Prisma.DesignCreateInput, context: Context) {
  const user = await context.prisma.design.create({
    data: { ..._args },
  });
  return user;
}

export async function updateDesign(
  _parent: any,
  _args: Pick<Prisma.DesignUpdateInput, 'public' | 'optionParameters' | 'name'> & {
    id: number;
  },
  context: Context
) {
  const { id, ...data } = _args;
  const user = await context.prisma.design.update({
    where: { id },
    data: { ...data },
  });
  return user;
}

export async function incrementTimesCopied(_parent: any, _args: { id: number }, context: Context) {
  const user = await context.prisma.design.update({
    where: { id: _args.id },
    data: { timesCopied: { increment: 1 } },
  });
  return user;
}
