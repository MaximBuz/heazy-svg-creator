import { GraphQLError } from 'graphql';
import { Design, Prisma } from '@prisma/client';
import { Context } from '../../../context';
import { Errors } from '../../helpers/Errors';

type CreateNewDesignArgs = {
  name: string;
  typeId: number;
  optionParameters: Prisma.InputJsonValue;
  thumbnailUrl: string;
  copiedFromUserId: number;
};

export async function createNewDesign(
  _parent: never,
  {
    name,
    typeId,
    optionParameters,
    thumbnailUrl,
    copiedFromUserId,
  }: CreateNewDesignArgs,
  { uid, prisma }: Context
): Promise<Design> {
  if (!uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const data: Prisma.DesignCreateInput = {
    name: name,
    type: { connect: { id: typeId } },
    optionParameters,
    user: { connect: { firebaseId: uid } },
    thumbnailUrl: thumbnailUrl,
  };

  if (copiedFromUserId) data.copiedFrom = { connect: { id: copiedFromUserId } };

  const design = await prisma.design.create({ data });

  return design;
}

type UpdateDesignArgs = Partial<
  Pick<Prisma.DesignUpdateInput, 'public' | 'optionParameters' | 'name'>
> & { id: number; delete: boolean };

export async function updateDesign(
  _parent: never,
  args: UpdateDesignArgs,
  context: Context
) {
  if (!context.uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const { id, delete: shouldDelete, ...data } = args;

  const design = await context.prisma.design.update({
    where: { id },
    data: { ...data, deleted: shouldDelete ? true : false },
  });
  return design;
}

export async function incrementTimesCopied(
  _parent: never,
  { id }: { id: number },
  context: Context
) {
  if (!context.uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const design = await context.prisma.design.update({
    where: { id },
    data: { timesCopied: { increment: 1 } },
  });

  return design;
}
