import gql from 'graphql-tag';

gql`
  query getPublicDesigns($sortBy: String, $type: [Int], $take: Int, $cursor: Int) {
    designs: getPublicDesigns(sortBy: $sortBy, type: $type, take: $take, cursor: $cursor) {
      id
      name
      id
      timesCopied
      public
      name
      type {
        id
        name
      }
      thumbnailUrl
      copiedFrom {
        userName
        id
      }
      user {
        firebaseId
      }
      optionParameters
      createdAt
    }
  }
`;
