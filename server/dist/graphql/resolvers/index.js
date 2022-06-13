"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const graphql_scalars_1 = require("graphql-scalars");
const queries_1 = require("./queries");
const mutations_1 = require("./mutations");
const user_1 = require("./user");
const design_1 = require("./design");
exports.resolvers = {
    DateTime: graphql_scalars_1.DateTimeResolver,
    JSON: graphql_type_json_1.default,
    Query: queries_1.Query,
    Mutation: mutations_1.Mutation,
    User: user_1.User,
    Design: design_1.Design,
};
