import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql';
import { context } from './context';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlHTTP({ schema, context, graphiql: true }));

app.listen(4000, () => console.log('Server listening on Port 4000'));
