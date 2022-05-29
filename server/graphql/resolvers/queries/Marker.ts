import { Context } from '../../../context';

export async function getMarkersByUserId(_parent: any, _args: { id: number }, context: Context) {
  const markers = context.prisma.markerOptions.findMany({
    where: { userId: _args.id },
  });
  return markers;
}

export async function getMarkersByFirebaseId(_parent: any, _args: { id: string }, context: Context) {
  const markers = context.prisma.markerOptions.findMany({
    where: {
      user: {
        firebaseId: _args.id,
      },
    },
  });
  return markers;
}

export async function getMarkerById(_parent: any, _args: { id: number }, context: Context) {
  const marker = context.prisma.markerOptions.findFirst({
    where: { id: _args.id },
  });

  return marker;
}
