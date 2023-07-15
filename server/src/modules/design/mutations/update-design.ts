import { GraphQLError } from 'graphql';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';
import { MutationUpdateDesignArgs } from '../../types';

export async function updateDesign(
  _parent: never,
  args: MutationUpdateDesignArgs,
  context: Context
) {
  if (!context.uid) throw new GraphQLError(Errors.NOT_ALLOWED);

  const { id, delete: shouldDelete, ...data } = args;

  const design = await context.prisma.design.update({
    where: { id },
    data: {
      ...data,
      name: data.name || undefined,
      deleted: shouldDelete ? true : false,
      public: data.public ?? false,
    },
  });

  return design;
}
