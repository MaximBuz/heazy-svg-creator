import gql from 'graphql-tag';

gql`
  mutation updateUser($userName: String) {
    user: updateUser(userName: $userName) {
      id
      firebaseId
      email
      userName
      avatarUrl
    }
  }
`;
