import gql from 'graphql-tag';

gql`
  query getDesignTypes {
    designTypes: getDesignTypes {
      id
      name
    }
  }
`;
