import { makeExecutableSchema } from '@graphql-tools/schema';
import { DateTimeResolver } from 'graphql-scalars';
import { Context } from './context';

const typeDefs = `

`;

const resolvers = {};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
