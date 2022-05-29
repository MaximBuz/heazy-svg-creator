import { Context } from '../../../context';

export async function getCornersByUserId(_parent: any, _args: { id: number }, context: Context) {
  const corners = context.prisma.cornerOptions.findMany({
    where: { userId: _args.id },
  });
  return corners;
}

export async function getCornersByFirebaseId(_parent: any, _args: { id: string }, context: Context) {
  const corners = context.prisma.cornerOptions.findMany({
    where: {
      user: {
        firebaseId: _args.id,
      },
    },
  });
  return corners;
}

export async function getCornerById(_parent: any, _args: { id: number }, context: Context) {
  const corner = context.prisma.cornerOptions.findFirst({
    where: { id: _args.id },
  });
  return corner;
}
