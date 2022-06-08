import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewUser(_parent: any, _args: Prisma.UserCreateInput, context: Context) {
  const user = await context.prisma.user.create({
    data: { ..._args },
  });
  return user;
}
export async function updateUser(
  _parent: any,
  _args: Pick<Prisma.UserUpdateInput, 'userName'> & { userId: number },
  context: Context
) {
  const { userId: id, userName } = _args;
  const user = await context.prisma.user.update({
    where: { id },
    data: { userName },
  });
  return user;
}
