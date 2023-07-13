import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './src';
import { context } from './context';
import { DecodedIdToken, getAuth } from 'firebase-admin/auth';
import admin from './firebase';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const idToken = authHeader.split(' ')[1];
    getAuth(admin)
      .verifyIdToken(idToken)
      .then((decodedToken: DecodedIdToken) => {
        const uid = decodedToken.uid;
        context.uid = uid; // pass uid of user to graphql resolvers
        next();
      })
      .catch((error) => {
        console.error(error);
        next();
      });
  } else {
    next();
  }
});

app.use('/graphql', graphqlHTTP({ schema, context, graphiql: true }));

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
