import { Design } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';

export async function getDesignById(
  _parent: never,
  args: { id: number },
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
