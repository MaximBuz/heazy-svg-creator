import { Design as TDesign } from '@prisma/client';
import { Context } from '../../context';

export const Design = {
  async user(_parent: TDesign, _args: any, context: Context) {
    const user = await context.prisma.user.findFirst({
      where: { id: _parent.userId },
    });
    return user;
  },
  async type(_parent: TDesign, _args: any, context: Context) {
    const type = await context.prisma.designType.findFirst({
      where: { id: _parent.typeId },
    });
    return type;
  },
  async copiedFrom(_parent: TDesign, _args: any, context: Context) {
    if (_parent.copiedFromUserId) {
      const type = await context.prisma.user.findFirst({
        where: { id: _parent.copiedFromUserId },
      });
      return type;
    } else return;
  },
};
