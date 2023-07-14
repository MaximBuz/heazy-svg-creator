import { GraphQLError } from 'graphql';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';
import { MutationIncrementTimesCopiedArgs } from '../../types';

export async function incrementTimesCopied(
  _parent: never,
  { id }: MutationIncrementTimesCopiedArgs,
  context: Context
) {
  if (!context.uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const design = await context.prisma.design.update({
    where: { id },
    data: { timesCopied: { increment: 1 } },
  });

  return design;
}
