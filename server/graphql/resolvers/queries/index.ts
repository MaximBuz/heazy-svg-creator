import { getUserById, getUserByFirebaseId } from './User';
import { getWaveById, getWavesByFirebaseId, getWavesByUserId } from './Waves';
import { getBubbleById, getBubblesByFirebaseId, getBubblesByUserId } from './Bubble';
import { getCornersByFirebaseId, getCornersByUserId, getCornerById } from './Corners';
import { getMarkersByUserId, getMarkerById, getMarkersByFirebaseId } from './Marker';

export const Query = {
  getUserById,
  getUserByFirebaseId,

  getWaveById,
  getWavesByFirebaseId,
  getWavesByUserId,

  getBubbleById,
  getBubblesByFirebaseId,
  getBubblesByUserId,

  getCornerById,
  getCornersByFirebaseId,
  getCornersByUserId,

  getMarkerById,
  getMarkersByFirebaseId,
  getMarkersByUserId,
};
