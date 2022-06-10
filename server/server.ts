import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql';
import { context } from './context';
import { getAuth } from 'firebase-admin/auth';
import admin from './firebase';

const app = express();

app.use(cors());
app.use(express.json());

// Verify JWT Token with firebase
app.use((req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const idToken = authHeader.split(' ')[1];
    getAuth(admin)
      .verifyIdToken(idToken)
      .then((decodedToken: any) => {
        const uid = decodedToken.uid;
        console.log(uid);

        context.uid = uid; // pass uid of user to graphql resolvers
        next();
      })
      .catch((error: any) => {
        console.error(error);
        next();
      });
  } else {
    next();
  }
});

app.use('/graphql', graphqlHTTP({ schema, context, graphiql: true }));

app.listen(4000, () => console.log('Server listening on Port 4000'));
