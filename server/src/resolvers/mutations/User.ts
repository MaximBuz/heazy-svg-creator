import { Prisma, User } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { Context } from '../../../context';
import { Errors } from '../../helpers/Errors';

export async function createNewUser(
  _parent: never,
  args: Prisma.UserCreateInput,
  { prisma }: Context
): Promise<User> {
  const user = await prisma.user.create({
    data: { ...args },
  });

  return user;
}
export async function updateUser(
  _parent: never,
  args: Pick<Prisma.UserUpdateInput, 'userName'>,
  { uid, prisma }: Context
): Promise<User> {
  if (!uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const { userName } = args;

  const user = await prisma.user.update({
    where: { firebaseId: uid },
    data: { userName },
  });

  return user;
}
