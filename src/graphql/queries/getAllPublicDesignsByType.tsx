import gql from 'graphql-tag';

gql`
query getAllPublicDesignsByType($typeId: Int!) {
  designs: getAllPublicDesignsByType(typeId: $typeId) {
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
