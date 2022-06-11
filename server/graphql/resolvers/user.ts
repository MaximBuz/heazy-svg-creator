import { User as UserType } from '@prisma/client';
import { Context } from '../../context';
import { GraphQLError } from 'graphql';

export const User = {
  async designs (_parent: UserType, _args: any, context: Context) {
    if(!context.uid) throw new GraphQLError(`Not Authorized`)
    const designs = await context.prisma.design.findMany({
      where: { userId: _parent.id, deleted: false },
      orderBy: { createdAt: 'desc' },
      include: { copiedFrom: true, type: true },
    });
    return designs;
  },
};
