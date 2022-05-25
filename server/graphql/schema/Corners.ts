export const Corners = `
type CornerOptions {
  id: Int!
  name: String!
  user: User
  seed: Int!

  stroke: Boolean!
  solid: Int!
  strokeWidth: Int!
  strokeShrink: Boolean!
  balance: Float!
  velocity: Float!
  breaks: Int!
  stacks: Int!
  distance: Int!
  smooth: Float!

  topLeftCorner: Boolean
  topRightCorner: Boolean
  bottomLeftCorner: Boolean
  bottomRightCorner: Boolean
  mirror: Boolean


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