import { Context } from '../../../context';

export async function getUserByFirebaseId (_parent: any, _args: { id: string; }, context: Context) {
  const user = await context.prisma.user.findFirst({
    where: { firebaseId: _args.id },
  });
  return user;
}
export async function getUserById(_parent: any, _args: { id: number }, context: Context) {
  const user = await context.prisma.user.findFirst({
    where: { id: _args.id },
  });
  return user;
}

