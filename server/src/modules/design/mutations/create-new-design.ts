import { Design, Prisma } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';
import { MutationCreateNewDesignArgs } from '../../types';

export async function createNewDesign(
  _parent: never,
  {
    name,
    typeId,
    optionParameters,
    thumbnailUrl,
    copiedFromUserId,
  }: MutationCreateNewDesignArgs,
  { uid, prisma }: Context
): Promise<Design> {
  if (!uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const data: Prisma.DesignCreateInput = {
    name: name,
    type: { connect: { id: typeId } },
    optionParameters,
    user: { connect: { firebaseId: uid } },
    thumbnailUrl: thumbnailUrl || '',
  };

  if (copiedFromUserId) data.copiedFrom = { connect: { id: copiedFromUserId } };

  const design = await prisma.design.create({ data });

  return design;
}
