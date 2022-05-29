import { WaveOptions } from '@prisma/client';
import { Context } from '../../../context';

export async function user(_parent: WaveOptions, _args: any, context: Context) {
  const user = await context.prisma.user.findFirst({
    where: { id: _parent.userId },
  });
  return user;
}
