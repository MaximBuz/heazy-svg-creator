import { Prisma } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { Context } from '../../../context';

export async function createNewUser(
  _parent: any,
  _args: Prisma.UserCreateInput,
  context: Context
) {
  const user = await context.prisma.user.create({
    data: { ..._args },
  });
  return user;
}
export async function updateUser(
  _parent: any,
  _args: Pick<Prisma.UserUpdateInput, 'userName'>,
  context: Context
) {
  if (!context.uid) throw new GraphQLError('Not Authorized');
  const { userName } = _args;
  const user = await context.prisma.user.update({
    where: { firebaseId: context.uid },
    data: { userName },
  });
  return user;
}
