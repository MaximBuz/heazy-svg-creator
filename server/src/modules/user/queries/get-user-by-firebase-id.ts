import { GraphQLError } from 'graphql';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';

export async function getUserByFirebaseId(
  _parent: never,
  _args: never,
  { uid, prisma }: Context
) {
  if (!uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const user = await prisma.user.findFirst({ where: { firebaseId: uid } });

  if (!user) throw new GraphQLError(Errors.NOT_FOUND);

  return user;
}
