import gql from 'graphql-tag';

gql`
  mutation incrementTimesCopied($id: Int!) {
    design: incrementTimesCopied(id: $id) {
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
