import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewDesign(
  _parent: any,
  _args: { userId: number; name: string; typeId: number; optionParameters: any; thumbnailUrl: string },
  context: Context
) {
  const design = await context.prisma.design.create({
    data: {
      name: _args.name,
      type: { connect: { id: _args.typeId } },
      optionParameters: _args.optionParameters,
      user: { connect: { id: _args.userId } },
      thumbnailUrl: _args.thumbnailUrl,
    },
  });
  return design;
}

export async function updateDesign(
  _parent: any,
  _args: Pick<Prisma.DesignUpdateInput, 'public' | 'optionParameters' | 'name'> & {
    id: number;
  },
  context: Context
) {
  const { id, ...data } = _args;
  const design = await context.prisma.design.update({
    where: { id },
    data: { ...data },
  });
  return design;
}

export async function incrementTimesCopied(_parent: any, _args: { id: number }, context: Context) {
  const design = await context.prisma.design.update({
    where: { id: _args.id },
    data: { timesCopied: { increment: 1 } },
  });
  return design;
}
