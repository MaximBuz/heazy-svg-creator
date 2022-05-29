import { Context } from '../../../context';

export async function getWavesByUserId(_parent: any, _args: { id: number }, context: Context) {
  const waves = await context.prisma.waveOptions.findMany({
    where: { userId: _args.id },
  });
  return waves;
}

export async function getWavesByFirebaseId(_parent: any, _args: { id: string }, context: Context) {
  const waves = await context.prisma.waveOptions.findMany({
    where: {
      user: {
        firebaseId: _args.id,
      },
    },
  });
  return waves;
}

export async function getWavesById(_parent: any, _args: { id: number }, context: Context) {
  const wave = await context.prisma.waveOptions.findFirst({
    where: { id: _args.id },
  });
  return wave;
}
