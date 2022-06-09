import { User as UserType } from '@prisma/client';
import { Context } from '../../context';

export const User = {
  async designs(_parent: UserType, _args: any, context: Context) {
    const designs = await context.prisma.design.findMany({
      where: { userId: _parent.id, deleted: false },
      orderBy: { createdAt: 'desc' },
    });
    return designs;
  },
};
