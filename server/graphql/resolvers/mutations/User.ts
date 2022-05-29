import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewUser(_parent: any, _args: Prisma.UserCreateInput, context: Context) {
  const user = await context.prisma.user.create({
    data: { ..._args },
  });
  return user;
}
