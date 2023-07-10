import gql from 'graphql-tag';
// possibly refactor this to only allow viewing if you own design OR it's public (get ID from auth!!)
gql`
  query getDesignById($id: Int!) {
    design: getDesignById(id: $id) {
      id
      name
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
`;
