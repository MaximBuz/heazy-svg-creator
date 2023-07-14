import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './src';
import { context } from './context';
import { getAuth } from 'firebase-admin/auth';
import admin from './firebase';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(async (req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const idToken = authHeader.split(' ')[1];
    try {
      const decodedToken = await getAuth(admin).verifyIdToken(idToken);
      const uid = decodedToken.uid;
      context.uid = uid; // pass uid of user to GraphQL resolvers
      next();
    } catch (error) {
      console.error(error);
      next(error);
    }
  } else {
    next();
  }
});

app.use('/graphql', graphqlHTTP({ schema, context, graphiql: true }));

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
