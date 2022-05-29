import { User } from '@prisma/client';
import { Context } from '../../../context';

export async function waves (_parent: User, _args: any, context: Context) {
  const waves = await context.prisma.waveOptions.findMany({
    where: { userId: _parent.id },
  });
  return waves;
}
