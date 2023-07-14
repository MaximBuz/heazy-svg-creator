import GraphQLJSON from 'graphql-type-json';
import { DateTimeResolver } from 'graphql-scalars';
import { User } from './user/resolvers';
import { Design } from './design/resolvers';
import { getUserByFirebaseId } from './user/queries/get-user-by-firebase-id';
import { getUserById } from './user/queries/get-user-by-id';
import { getDesignById } from './design/queries/get-design-by-id';
import { getDesignTypes } from './design/queries/get-design-types';
import { getPublicDesigns } from './design/queries/get-public-designs';
import { createNewUser } from './user/mutations/create-new-user';
import { updateUser } from './user/mutations/update-user';
import { createNewDesign } from './design/mutations/create-new-design';
import { incrementTimesCopied } from './design/mutations/increment-times-copied';
import { updateDesign } from './design/mutations/update-design';

export const resolvers = {
  DateTime: DateTimeResolver,
  JSON: GraphQLJSON,
  Query: {
    getUserByFirebaseId,
    getUserById,
    getDesignById,
    getDesignTypes,
    getPublicDesigns,
  },
  Mutation: {
    createNewUser,
    updateUser,
    createNewDesign,
    incrementTimesCopied,
    updateDesign,
  },
  User,
  Design,
};
