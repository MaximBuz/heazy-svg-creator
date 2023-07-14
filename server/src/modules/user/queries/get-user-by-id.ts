import { GraphQLError } from 'graphql';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';

export async function getUserById(
  _parent: never,
  { id }: { id: number },
  { prisma }: Context
) {
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user) throw new GraphQLError(Errors.NOT_FOUND);

  return user;
}
