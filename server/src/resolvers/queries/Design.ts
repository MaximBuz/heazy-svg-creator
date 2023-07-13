import { GraphQLError } from 'graphql';
import { Design, Prisma } from '@prisma/client';
import { Context } from '../../../context';
import { Errors } from '../../helpers/Errors';

type GetPublicDesignArgs = {
  sortBy: string;
  take: number;
  type: number[];
  cursor: number;
};

export async function getPublicDesigns(
  _parent: never,
  args: GetPublicDesignArgs,
  { prisma }: Context
): Promise<Design[]> {
  const {
    sortBy = 'timesCopied',
    take = 3,
    type = [1, 2, 3, 4],
    cursor = null,
  } = args;

  const searchParams: Prisma.DesignFindManyArgs = {
    take,
    where: { public: true, deleted: false, type: { id: { in: type } } },
    orderBy: { [sortBy]: 'desc' },
  };

  if (cursor) {
    searchParams.cursor = { id: cursor };
    searchParams.skip = 1;
  }

  const designs = await prisma.design.findMany(searchParams);

  return designs;
}

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
