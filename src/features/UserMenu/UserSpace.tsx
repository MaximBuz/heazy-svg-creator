import React, { memo, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Design } from '../../graphql/generated';

// Design
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import Templates from './Templates';
import Explore from './Explore';
import ErrorPlaceholder from '../../components/ErrorPlaceholder';
import LoadingPlaceholder from '../../components/LoadingPlaceholder';

const UserSpace: React.FunctionComponent = memo(() => {
  // Auth
  const {
    currentUser,
    firebaseUser,
    currentUserIsSuccess,
    currentUserIsError,
    currentUserLoading,
  } = useAuth();

  if (currentUserLoading) {
    return <LoadingPlaceholder size={80} speed={1} color="#363E4A" />;
  }
  if (currentUserIsError) {
    return <ErrorPlaceholder withImage />;
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
            {currentUser && (
              <Templates designs={currentUser.designs as Design[]} />
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
