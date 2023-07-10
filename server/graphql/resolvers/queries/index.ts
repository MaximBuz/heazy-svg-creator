import { getUserById, getUserByFirebaseId } from './User';
import { getPublicDesigns, getDesignById } from './Design';
import { getDesignTypes } from './DesignType';

export const Query = {
  getUserByFirebaseId,
  getUserById,
  getPublicDesigns,
  getDesignById,
  getDesignTypes,
};
