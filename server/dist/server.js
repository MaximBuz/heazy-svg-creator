"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("./graphql");
const context_1 = require("./context");
const auth_1 = require("firebase-admin/auth");
const firebase_1 = __importDefault(require("./firebase"));
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Verify JWT Token with firebase
app.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const idToken = authHeader.split(' ')[1];
        (0, auth_1.getAuth)(firebase_1.default)
            .verifyIdToken(idToken)
            .then((decodedToken) => {
            const uid = decodedToken.uid;
            context_1.context.uid = uid; // pass uid of user to graphql resolvers
            next();
        })
            .catch((error) => {
            console.error(error);
            next();
        });
    }
    else {
        next();
    }
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({ schema: graphql_1.schema, context: context_1.context, graphiql: true }));
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
