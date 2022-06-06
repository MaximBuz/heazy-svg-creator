import gql from 'graphql-tag';

gql`
  query UserByFirebaseId($id: String!) {
    getUserByFirebaseId(id: $id) {
      id
      firebaseId
      email
      username
      bubbles {
        name
        id
        seed
        stroke
        velocity
      }
    }
  }
`;