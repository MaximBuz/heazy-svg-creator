export const Mutation = `
type Mutation {
  createNewUser(
    firebaseId: String
    email: String!
    username: String!
  ):  User

  createNewBubble(
    name: String!
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
  ): BubbleOptions

  createNewWaves(
    name: String!
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
  ): WaveOptions

  createNewCorners(
    name: String!
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
  ): CornerOptions

  createNewMarker(
    name: String!
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
  ): MarkerOptions
 }
`;
