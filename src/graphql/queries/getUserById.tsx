import gql from 'graphql-tag';

gql`
  query getUserById($id: Int!) {
    user: getUserById(id: $id) {
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
