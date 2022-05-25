import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';
import { context } from './context';

const app = express();

app.use('/graphql', graphqlHTTP({ schema, context, graphiql: true }));

app.listen(4000, () => console.log('Server listening on Port 4000'));
