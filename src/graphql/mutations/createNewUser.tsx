import gql from 'graphql-tag';

gql`
  mutation createNewUser(
    $firebaseId: String!
    $email: String!
    $userName: String!
    $avatarUrl: String
  ) {
    user: createNewUser(
      firebaseId: $firebaseId
      email: $email
      userName: $userName
      avatarUrl: $avatarUrl
    ) {
      id
      firebaseId
      email
      userName
      avatarUrl
    }
  }
`;
