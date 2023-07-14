import { GraphQLError } from 'graphql';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';

export async function incrementTimesCopied(
  _parent: never,
  { id }: { id: number },
  context: Context
) {
  if (!context.uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const design = await context.prisma.design.update({
    where: { id },
    data: { timesCopied: { increment: 1 } },
  });

  return design;
}
