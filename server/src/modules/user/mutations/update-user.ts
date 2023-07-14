import { Prisma, User } from '@prisma/client';
import { GraphQLError } from 'graphql/error';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';

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
