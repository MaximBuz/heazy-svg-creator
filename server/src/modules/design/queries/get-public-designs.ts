import { Design, Prisma } from '@prisma/client';
import { Context } from '../../../../context';
import { QueryGetPublicDesignsArgs } from '../../types';

export async function getPublicDesigns(
  _parent: never,
  args: QueryGetPublicDesignsArgs,
  { prisma }: Context
): Promise<Design[]> {
  const take = args.take || 3;
  const type = args.type;
  const sortBy = args.sortBy || 'timesCopied';

  const searchParams: Prisma.DesignFindManyArgs = {
    take,
    where: {
      public: true,
      deleted: false,
      type: type ? { id: { in: type } } : undefined,
    },
    orderBy: { [sortBy]: 'desc' },
  };

  if (args.cursor) {
    searchParams.cursor = { id: args.cursor };
    searchParams.skip = 1;
  }

  const designs = await prisma.design.findMany(searchParams);

  return designs;
}
