import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
