export const Waves = `
type WaveOptions {
  id: Int!
  name: String!
  user: User
  seed: Int!
  
  stroke: Boolean
  solid: Int!
  strokeWidth: Int!
  strokeShrink: Boolean
  balance: Float!
  velocity: Float!
  breaks: Int!
  stacks: Int!
  distance: Int!
  smooth: Float!

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