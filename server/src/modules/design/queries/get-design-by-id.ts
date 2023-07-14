import { Design } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';
import { QueryGetDesignByIdArgs } from '../../types';

export async function getDesignById(
  _parent: never,
  args: QueryGetDesignByIdArgs,
  { prisma, uid }: Context
): Promise<Design> {
  const design = await prisma.design.findFirst({
    where: {
      OR: [
        { public: true, id: args.id, deleted: false },
        { user: { firebaseId: uid }, id: args.id, deleted: false },
      ],
    },
  });

  if (!design) throw new GraphQLError(Errors.NOT_FOUND);

  return design;
}
