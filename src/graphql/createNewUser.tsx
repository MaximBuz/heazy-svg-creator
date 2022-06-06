import gql from 'graphql-tag';

gql`
  mutation createNewUser($firebaseId: String!, $email: String!, $firstName: String!) {
    createNewUser(firebaseId: $firebaseId, email: $email, firstName: $firstName) {
      id
      firebaseId
      email
      firstName
    }
  }
`;
