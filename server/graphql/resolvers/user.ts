import { User as UserType } from '@prisma/client';
import { Context } from '../../context';

export const User = {
  async desings(_parent: UserType, _args: any, context: Context) {
    const designs = await context.prisma.design.findMany({
      where: { userId: _parent.id },
    });
    return designs;
  },
};
