import GraphQLJSON from 'graphql-type-json';
import { Query } from './queries';
import { Mutation } from './mutations';
import { User } from './user';
import { Design } from './design';

export const resolvers = {
  JSON: GraphQLJSON,
  Query,
  Mutation,
  User,
  Design,
};
