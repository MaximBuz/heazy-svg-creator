import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Jelly } from '@uiball/loaders';
import React, { memo } from 'react';
import { useAuth } from '../../contexts/Auth';
import { useGetUserByFirebaseIdQuery } from '../../graphql/generated';
import { endpoint, headers } from '../../utils/apiConfig';
import ErrorImg from '../../assets/Error.svg';

export interface IUserSpaceProps {}

const UserSpace: React.FunctionComponent<IUserSpaceProps> = memo((props) => {
  const { currentUser } = useAuth();
  const userQuery = useGetUserByFirebaseIdQuery(
    { endpoint, fetchParams: { headers } },
    { id: currentUser.uid }
  );

  if (userQuery.isLoading) {
    return (
      <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
        <Jelly size={80} speed={1} color="#363E4A" />
      </Flex>
    );
  }
  if (userQuery.isError) {
  return (
    <Flex direction="column" mt="1em" textAlign="center" gap="10px" height="90%" justifyContent="center">
      <Image pos="relative" right="15px" src={ErrorImg} h="20%"></Image>
      <Box mt="1em">
        <Heading as="h4" size="md" fontWeight={800}>
          oooops...{' '}
        </Heading>
        <Heading as="h5" size="md" fontWeight={300}>
          Something went wrong!
        </Heading>
      </Box>
    </Flex>
  );
  }
  return <></>;
});

export default UserSpace;
