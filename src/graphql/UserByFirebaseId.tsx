import gql from 'graphql-tag';

gql`
query UserByFirebaseId($id: String!) {
  user: getUserByFirebaseId(id: $id) {
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
