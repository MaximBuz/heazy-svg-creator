import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql';
import { context } from './context';
import admin from './firebase';

const app = express();

app.use(cors());
app.use(express.json());

// Verify JWT Token with firebase
// app.use((req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const idToken = authHeader.split(' ')[1];
//     admin
//       .getAuth()
//       .verifyIdToken(idToken)
//       .then((decodedToken: any) => {
//         const uid = decodedToken.uid;
//         context.uid = uid; // pass uid of user to graphql resolvers
//         next();
//       })
//       .catch((error: any) => {
//         console.error(error);
//         res.status(401).send({ error: 'Could not authenticate request' });
//       });
//   } else {
//     res.status(401).send({ error: 'Could not authenticate request' });
//   }
// });

app.use('/graphql', graphqlHTTP({ schema, context, graphiql: true }));

app.listen(4000, () => console.log('Server listening on Port 4000'));
