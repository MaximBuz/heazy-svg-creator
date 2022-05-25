export const Bubble = `
type BubbleOptions {
  id: Int!
  name: String!
  user: User
  seed: Int!

  stroke: Boolean!
  solid: Int!
  strokeWidth: Int!
  velocity: Float!
  size: Float!

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