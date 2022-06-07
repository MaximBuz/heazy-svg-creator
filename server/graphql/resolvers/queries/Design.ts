import { Context } from '../../../context';

export async function getAllPublicDesigns(_parent: any, _args: { sortBy: string }, context: Context) {
  const sortKey = _args.sortBy || 'timesCopied';
  const designs = await context.prisma.design.findMany({
    where: { public: true },
    orderBy: { [sortKey]: 'desc' },
  });
  return designs;
}

export async function getAllPublicDesignsByType(_parent: any, _args: { typeId: number }, context: Context) {
  const designs = await context.prisma.design.findMany({
    where: { public: true, typeId: _args.typeId },
  });
  return designs;
}

export async function getDesignById(_parent: any, _args: { id: number }, context: Context) {
  const design = await context.prisma.design.findFirst({
    where: { public: true, id: _args.id },
  });
  return design;
}
