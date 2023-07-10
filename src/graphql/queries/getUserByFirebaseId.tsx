import gql from 'graphql-tag';

gql`
  query getUserByFirebaseId {
    user: getUserByFirebaseId {
      id
      firebaseId
      email
      userName
      avatarUrl
      designs {
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
        optionParameters
        createdAt
      }
    }
  }
`;
