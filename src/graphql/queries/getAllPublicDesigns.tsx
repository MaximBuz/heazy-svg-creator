import gql from 'graphql-tag';

gql`
query getAllPublicDesigns($sortBy: String) {
  designs: getAllPublicDesigns(sortBy: $sortBy) {
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
