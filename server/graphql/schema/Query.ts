export const Query = `
type Query {
  getUserByID(id: Int!): User
  getUserByFirebaseId(id: String!): User

  getWavesByUserID(id: Int!): [WaveOptions]
  getWavesByFirebaseId(id: String!): [WaveOptions]
  getWaveById(id: Int!): WaveOptions
  
  getBubblesByUserID(id: Int!): [BubbleOptions]
  getBubblesByFirebaseId(id: String!): [BubbleOptions]
  getBubbleById(id: Int!): BubbleOptions
  
  getCornersByUserID(id: Int!): [CornerOptions]
  getCornersByFirebaseId(id: String!): [CornerOptions]
  getCornerById(id: Int!): CornerOptions
  
  getMarkersByUserID(id: Int!): [MarkerOptions]
  getMarkersByFirebaseId(id: String!): [MarkerOptions]
  getMarkerById(id: Int!): MarkerOptions
}
`;