import React, { memo, useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { Design, useGetUserByFirebaseIdQuery } from '../../graphql/generated';
import { endpoint, headers } from '../../utils/apiConfig';

// Design
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Input,
} from '@chakra-ui/react';
import Templates from './Templates';
import Explore from './Explore';
import QueryError from '../../components/queryError';
import QueryLoading from '../../components/queryLoading';

const UserSpace: React.FunctionComponent = memo(() => {
  // Auth
  const {
    currentUser,
    firebaseUser,
    currentUserIsSuccess,
    currentUserIsError,
    currentUserLoading,
  } = useAuth();

  // Filter
  const [search, setSearch] = useState<string>('');

  if (currentUserLoading) {
    return <QueryLoading size={80} speed={1} color="#363E4A" />;
  }
  if (currentUserIsError) {
    return <QueryError withImage />;
  }
  return (
    <Flex direction="column" textAlign="center" gap="10px">
      <Box mb="1em">
        <Heading as="h4" size="md" fontWeight={800}>
          Hey there!
        </Heading>
        <Heading as="h5" size="md" fontWeight={300}>
          {currentUserIsSuccess && currentUser.userName}
        </Heading>
        {!firebaseUser?.emailVerified && (
          <Text fontSize="sm">Please do not forget to verify your email!</Text>
        )}
      </Box>

      <Accordion allowToggle defaultIndex={0}>
        {/* ----- YOUR TEMPLATES ----- */}
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: '#3b4453', fontWeight: 'bolder' }}
              _hover={{ bg: '#272c36' }}
              _focus={{ boxShadow: 'none' }}
            >
              <Box pl="5" pr="5" flex="1" textAlign="center">
                Your templates
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pl="1em" pr="1em">
            <HStack mb="1em" dir="row" align="center" justify="center">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
              />
            </HStack>
            {currentUser && (
              <Templates
                search={search}
                designs={currentUser.designs as Design[]}
              />
            )}
          </AccordionPanel>
        </AccordionItem>

        {/* ----- EXPLORE ----- */}
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: '#3b4453', fontWeight: 'bolder' }}
              _hover={{ bg: '#272c36' }}
              _focus={{ boxShadow: 'none' }}
            >
              <Box flex="1" textAlign="center">
                Explore Templates
              </Box>
            </AccordionButton>
          </h2>
          <Explore />
        </AccordionItem>
      </Accordion>
    </Flex>
  );
});

export default UserSpace;
