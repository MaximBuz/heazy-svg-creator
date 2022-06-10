import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewDesign(
  _parent: any,
  _args: { firebaseId: string; name: string; typeId: number; optionParameters: any; thumbnailUrl: string },
  context: Context
) {
  const design = await context.prisma.design.create({
    data: {
      name: _args.name,
      type: { connect: { id: _args.typeId } },
      optionParameters: _args.optionParameters,
      user: { connect: { firebaseId: _args.firebaseId } },
      thumbnailUrl: _args.thumbnailUrl,
    },
  });
  return design;
}

export async function updateDesign(
  _parent: any,
  _args: Partial<Pick<Prisma.DesignUpdateInput, 'public' | 'optionParameters' | 'name'>> & {
    id: number;
    delete: boolean;
  },
  context: Context
) {
  const { id, delete: shouldDelete, ...data } = _args;
  const design = await context.prisma.design.update({
    where: { id },
    data: { ...data, deleted: shouldDelete ? true : false },
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
