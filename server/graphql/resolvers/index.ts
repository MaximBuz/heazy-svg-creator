import GraphQLJSON from 'graphql-type-json';
import { DateTimeResolver } from "graphql-scalars"
import { Query } from './queries';
import { Mutation } from './mutations';
import { User } from './user';
import { Design } from './design';

export const resolvers = {
  DateTime: DateTimeResolver,
  JSON: GraphQLJSON,
  Query,
  Mutation,
  User,
  Design,
};
