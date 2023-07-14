import { Prisma, User } from '@prisma/client';
import { Context } from '../../../../context';

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
