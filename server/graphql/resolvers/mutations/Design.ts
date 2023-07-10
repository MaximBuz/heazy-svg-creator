import { GraphQLError } from 'graphql';
import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewDesign(
  _parent: any,
  _args: {
    name: string;
    typeId: number;
    optionParameters: any;
    thumbnailUrl: string;
    copiedFromUserId: number;
  },
  context: Context
) {
  if (!context.uid) throw new GraphQLError('Not Authorized');

  const data: Prisma.DesignCreateInput = {
    name: _args.name,
    type: { connect: { id: _args.typeId } },
    optionParameters: _args.optionParameters,
    user: { connect: { firebaseId: context.uid } },
    thumbnailUrl: _args.thumbnailUrl,
  };

  if (_args.copiedFromUserId)
    data.copiedFrom = { connect: { id: _args.copiedFromUserId } };

  const design = await context.prisma.design.create({ data });
  return design;
}

export async function updateDesign(
  _parent: any,
  _args: Partial<
    Pick<Prisma.DesignUpdateInput, 'public' | 'optionParameters' | 'name'>
  > & {
    id: number;
    delete: boolean;
  },
  context: Context
) {
  if (!context.uid) throw new GraphQLError('Not Authorized');
  const { id, delete: shouldDelete, ...data } = _args;
  const design = await context.prisma.design.update({
    where: { id },
    data: { ...data, deleted: shouldDelete ? true : false },
  });
  return design;
}

export async function incrementTimesCopied(
  _parent: any,
  _args: { id: number },
  context: Context
) {
  if (!context.uid) throw new GraphQLError('Not Authorized');
  const design = await context.prisma.design.update({
    where: { id: _args.id },
    data: { timesCopied: { increment: 1 } },
  });
  return design;
}
