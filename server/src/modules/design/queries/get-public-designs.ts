import { Design, Prisma } from '@prisma/client';
import { Context } from '../../../../context';

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
