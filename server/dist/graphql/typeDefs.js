"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const fs_1 = __importDefault(require("fs"));
exports.typeDefs = `
scalar JSON
scalar DateTime

type User {
  id: Int!
  firebaseId: String!
  email: String!
  userName: String!
  avatarUrl: String
  designs: [Design]
}

type Design {
  id: Int!
  user: User!
  userId: Int!
  timesCopied: Int!
  public: Boolean!
  name: String!
  type: DesignType!
  typeId: Int!
  thumbnailUrl: String
  copiedFrom: User
  copiedFromUserId: Int
  optionParameters: JSON!
  createdAt: DateTime!
  deleted: Boolean!
}

type DesignType {
  id: Int!
  name: String!
}

type Query {
  getUserByFirebaseId: User
  getUserById(id: Int!): User
  getPublicDesigns(sortBy: String, type:[Int], take: Int, cursor: Int): [Design]
  getDesignById(id: Int!): Design
  getDesignTypes: [DesignType]!
}

type Mutation {
  createNewUser(firebaseId: String!, email: String!, userName: String!, avatarUrl: String): User
  updateUser(userName: String): User
  createNewDesign(public: Boolean, name: String!, typeId: Int!, thumbnailUrl: String, copiedFromUserId: Int, optionParameters: JSON!): Design
  updateDesign(id: Int!, public: Boolean, name: String, optionParameters: JSON, delete: Boolean): Design
  incrementTimesCopied(id: Int!): Design
}
`;
// saves a graphql schema on runtime
fs_1.default.writeFileSync('./graphql/schema.graphql', exports.typeDefs);
