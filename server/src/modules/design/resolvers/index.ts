import { GraphQLError } from 'graphql';
import { Design as TDesign, DesignType, User } from '@prisma/client';
import { Context } from '../../../../context';
import { Errors } from '../../../helpers/Errors';

export const Design = {
  async user(parent: TDesign, _args: never, context: Context): Promise<User> {
    const user = await context.prisma.user.findFirst({
      where: { id: parent.userId },
    });

    if (!user) throw new GraphQLError(Errors.NOT_FOUND);

    return user;
  },

  async type(
    parent: TDesign,
    _args: never,
    context: Context
  ): Promise<DesignType> {
    const type = await context.prisma.designType.findFirst({
      where: { id: parent.typeId },
    });

    if (!type) throw new GraphQLError(Errors.NOT_FOUND);

    return type;
  },

  async copiedFrom(
    parent: TDesign,
    _args: never,
    context: Context
  ): Promise<User | undefined | null> {
    if (!parent.copiedFromUserId) return;

    const user = await context.prisma.user.findFirst({
      where: { id: parent.copiedFromUserId },
    });

    return user;
  },
};
