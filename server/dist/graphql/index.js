"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const typeDefs_1 = require("./typeDefs");
const resolvers_1 = require("./resolvers");
exports.schema = (0, schema_1.makeExecutableSchema)({
    resolvers: resolvers_1.resolvers,
    typeDefs: typeDefs_1.typeDefs,
});
