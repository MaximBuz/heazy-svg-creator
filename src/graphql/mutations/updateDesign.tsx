import gql from 'graphql-tag';

gql`
  mutation updateDesign(
    $id: Int!
    $public: Boolean
    $name: String
    $optionParameters: JSON
    $delete: Boolean
  ) {
    design: updateDesign(
      id: $id
      public: $public
      name: $name
      optionParameters: $optionParameters
      delete: $delete
    ) {
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
        id
        userName
      }
      optionParameters
      createdAt
    }
  }
`;
