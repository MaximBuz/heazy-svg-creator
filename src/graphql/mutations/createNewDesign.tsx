import gql from 'graphql-tag';

gql`
mutation createNewDesign($userId: Int!, $public: Boolean, $name: String!, $typeId: Int!, $thumbnailUrl: String!, $copiedFromUserId: Int, $optionParameters: JSON!) {
  createNewDesign(userId: $userId, public: $public, name: $name, typeId: $typeId, thumbnailUrl: $thumbnailUrl, copiedFromUserId: $copiedFromUserId, optionParameters: $optionParameters) {
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
