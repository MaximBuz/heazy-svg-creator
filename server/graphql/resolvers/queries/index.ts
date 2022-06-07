import { getUserById, getUserByFirebaseId } from './User';
import { getAllPublicDesigns, getDesignById, getAllPublicDesignsByType } from './Design';
import { getDesignTypes } from './DesignType';

export const Query = {
  getUserByFirebaseId,
  getUserById,
  getAllPublicDesigns,
  getAllPublicDesignsByType,
  getDesignById,
  getDesignTypes
};
