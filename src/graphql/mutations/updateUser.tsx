import gql from 'graphql-tag';

gql`
mutation updateUser($userId: Int!, $userName: String) {
  user: updateUser(userId: $userId, userName: $userName) {
    id
    firebaseId
    email
    userName
    avatarUrl
  }
}
`;
