import gql from 'graphql-tag';

gql`
mutation updateDesign($id: Int!, $public: Boolean, $name: String, $optionParameters: JSON) {
  design: updateDesign(id: $id, public: $public, name: $name, optionParameters: $optionParameters) {
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
