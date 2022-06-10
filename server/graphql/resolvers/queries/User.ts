import { GraphQLError } from 'graphql';
import { Context } from '../../../context';

export async function getUserByFirebaseId (_parent: any, _args: any, context: Context) {
  if(!context.uid) throw new GraphQLError(`Not Authorized`)
  const user = await context.prisma.user.findFirst({
    where: { firebaseId: context.uid },
  });
  return user;
}
export async function getUserById(_parent: any, _args: { id: number }, context: Context) {
  const user = await context.prisma.user.findFirst({
    where: { id: _args.id },
  });
  return user;
}

