import { Prisma } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';

type UpdateDesignArgs = Partial<
  Pick<Prisma.DesignUpdateInput, 'public' | 'optionParameters' | 'name'>
> & { id: number; delete: boolean };

export async function updateDesign(
  _parent: never,
  args: UpdateDesignArgs,
  context: Context
) {
  if (!context.uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const { id, delete: shouldDelete, ...data } = args;

  const design = await context.prisma.design.update({
    where: { id },
    data: { ...data, deleted: shouldDelete ? true : false },
  });

  return design;
}
