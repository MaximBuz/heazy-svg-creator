export const Query = `
type Query {
  getUserById(id: Int!): User
  getUserByFirebaseId(id: String!): User

  getWavesByUserId(id: Int!): [WaveOptions]
  getWavesByFirebaseId(id: String!): [WaveOptions]
  getWaveById(id: Int!): WaveOptions
  
  getBubblesByUserId(id: Int!): [BubbleOptions]
  getBubblesByFirebaseId(id: String!): [BubbleOptions]
  getBubbleById(id: Int!): BubbleOptions
  
  getCornersByUserId(id: Int!): [CornerOptions]
  getCornersByFirebaseId(id: String!): [CornerOptions]
  getCornerById(id: Int!): CornerOptions
  
  getMarkersByUserId(id: Int!): [MarkerOptions]
  getMarkersByFirebaseId(id: String!): [MarkerOptions]
  getMarkerById(id: Int!): MarkerOptions
}
`;