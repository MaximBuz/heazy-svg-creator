import { Design, DesignType, User as UserType } from '@prisma/client';
import { Context } from '../../../../context';
import { GraphQLError } from 'graphql';
import { Errors } from '../../../helpers/Errors';

export const User = {
  async designs(
    parent: UserType,
    _args: never,
    { uid, prisma }: Context
  ): Promise<
    (Design & {
      copiedFrom: UserType | null;
      type: DesignType;
    })[]
  > {
    if (!uid) throw new GraphQLError(Errors.NOT_ALLOWED);

    const designs = await prisma.design.findMany({
      where: { userId: parent.id, deleted: false },
      orderBy: { createdAt: 'desc' },
      include: { copiedFrom: true, type: true },
    });

    return designs;
  },
};
