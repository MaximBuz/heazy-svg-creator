export const User = `
  type User {
    id: Int!
    firebaseId: String!
    email: String!
    firstName: String!
    waves: [WaveOptions]
    bubbles: [BubbleOptions]
    corners: [CornerOptions]
    markers: [MarkerOptions]
  }
`;