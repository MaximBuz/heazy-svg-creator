export const User = `
  type User {
    id: Int!
    firebaseId: String!
    email: String!
    username: String!
    waves: [WaveOptions]
    bubbles: [BubbleOptions]
    corners: [CornerOptions]
    markers: [MarkerOptions]
  }
`;