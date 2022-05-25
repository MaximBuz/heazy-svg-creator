export const Marker = `
type MarkerOptions {
  id: Int!
  name: String!
  user: User
  seed: Int!

  lineCap: String!
  lineJoin: String!
  strokeWidth: Int!
  markerHeight: Int!
  zickZacks: Int!
  pressure: Float!
  padding: Float!
  mirror: Boolean!
  yPosition: Float!
  ghost: Boolean!
  ghostSize: Float!
  ghostStartColor: String!
  ghostEndColor: String!

  startColor: String!
  endColor: String!
  bgColor: String!
  shadowX: Float!
  shadowY: Float!
  shadowSD: Float!
  shadowColor: String!
  userId: Int!
}
`;
