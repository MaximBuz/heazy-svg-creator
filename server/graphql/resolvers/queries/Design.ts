import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function getPublicDesigns(
  _parent: any,
  _args: { sortBy: string; take: number; type: number[]; cursor: number },
  context: Context
) {
  // Grabbing arguments
  const sortBy = _args.sortBy || 'timesCopied';
  const take = _args.take || 3;
  const type = _args.type || [1, 2, 3, 4];
  const cursor = _args.cursor || null;

  const searchParams: Prisma.DesignFindManyArgs = {
    take,
    where: { public: true, deleted: false, type: { id: { in: type } } },
    orderBy: { [sortBy]: 'desc' },
  };

  if (cursor) {
    searchParams.cursor = {
      id: cursor,
    };
    searchParams.skip = 1;
  }

  const designs = await context.prisma.design.findMany(searchParams);

  return designs;
}

export async function getDesignById(_parent: any, _args: { id: number }, context: Context) {
  const design = await context.prisma.design.findFirst({
    where: {
      OR: [
        { public: true, id: _args.id, deleted: false },
        { user: { firebaseId: context.uid }, id: _args.id, deleted: false },
      ],
    },
  });
  return design;
}
