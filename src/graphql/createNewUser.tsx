import gql from 'graphql-tag';

gql`
  mutation createNewUser($firebaseId: String!, $email: String!, $username: String!) {
    createNewUser(firebaseId: $firebaseId, email: $email, username: $username) {
      id
      firebaseId
      email
      username
    }
  }
`;
