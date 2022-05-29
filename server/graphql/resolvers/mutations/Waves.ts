import { Prisma } from '@prisma/client';
import { Context } from '../../../context';

export async function createNewWaves(_parent: any, _args: Prisma.WaveOptionsCreateInput, context: Context) {
  const wave = await context.prisma.waveOptions.create({
    data: { ..._args },
  });
  return wave;
}
