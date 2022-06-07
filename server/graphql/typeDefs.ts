import fs from 'fs';

export const typeDefs = `
scalar JSON

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
  createdAt: String!
}

type DesignType {
  id: Int!
  name: String!
}

type Query {
  getUserByFirebaseId(id: String!): User
  getUserById(id: Int!): User
  getAllPublicDesigns(sortBy: String): [Design]
  getAllPublicDesignsByType(typeId: Int!): [Design]
  getDesignById(id: Int!): Design
  getDesignTypes: [DesignType]!
}

type Mutation {
  createNewUser(firebaseId: String!, email: String!, username: String!, thumbnailUrl: String): User
  updateUser(userId: Int!, username: String): User
  createNewDesign(userId: Int!, public: Boolean, name: String!, typeId: Int!, thumbnailUrl: String, copiedFromUserId: Int, optionParameters: JSON!): Design
  updateDesign(id: Int!, public: Boolean, name: String, optionParameters: JSON!): Design
  incrementTimesCopied(id: Int!): Design
}
`;

// saves a graphql schema on runtime
fs.writeFileSync('./graphql/schema.graphql', typeDefs);
