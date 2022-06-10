import gql from 'graphql-tag';

gql`
mutation createNewDesign($firebaseId: String!, $public: Boolean, $name: String!, $typeId: Int!, $thumbnailUrl: String!, $copiedFromUserId: Int, $optionParameters: JSON!) {
  design: createNewDesign(firebaseId: $firebaseId, public: $public, name: $name, typeId: $typeId, thumbnailUrl: $thumbnailUrl, copiedFromUserId: $copiedFromUserId, optionParameters: $optionParameters) {
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
