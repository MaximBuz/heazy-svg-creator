import React, { memo, useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { Design, useGetUserByFirebaseIdQuery } from '../../graphql/generated';
import { endpoint, headers } from '../../utils/apiConfig';

// Design
import { Box, Flex, Heading, HStack, Icon } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Input } from '@chakra-ui/react';
import Templates from './Templates';
import Explore from './Explore';
import QueryError from '../../components/queryError';
import QueryLoading from '../../components/queryLoading';

const UserSpace: React.FunctionComponent = memo(() => {
  // Auth
  const { idToken } = useAuth();
  const userQuery = useGetUserByFirebaseIdQuery({ endpoint, fetchParams: { headers: headers(idToken) } });

  // Filter
  const [search, setSearch] = useState<string>('');

  if (userQuery.isLoading) {
    return <QueryLoading size={80} speed={1} color="#363E4A" />;
  }
  if (userQuery.isError) {
    return <QueryError withImage />;
  }
  return (
    <Flex direction="column" textAlign="center" gap="10px">
      <Box mb="1em">
        <Heading as="h4" size="md" fontWeight={800}>
          Hey there!
        </Heading>
        <Heading as="h5" size="md" fontWeight={300}>
          {userQuery.isSuccess && userQuery.data.user.userName}
        </Heading>
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
                placeholder="Search by name"
              />
              <Icon
                cursor="pointer"
                viewBox="0 0 24 24"
                fill="white"
                transition="0.3s"
                opacity={0.5}
                _hover={{ opacity: 0.8 }}
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M7,6H6V3A1,1,0,0,0,4,3V6H3A1,1,0,0,0,3,8H7A1,1,0,0,0,7,6ZM5,10a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V11A1,1,0,0,0,5,10Zm7,8a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18Zm9-8H20V3a1,1,0,0,0-2,0v7H17a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-2,4a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V15A1,1,0,0,0,19,14Zm-5,0H13V3a1,1,0,0,0-2,0V14H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z"
                />
              </Icon>
            </HStack>
            {userQuery.isSuccess && userQuery.data && (
              <Templates search={search} designs={userQuery.data.user.designs as Design[]} />
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
          <AccordionPanel pl="1em" pr="1em">
            <HStack mb="1em" dir="row" align="center" justify="center"></HStack>
            <Explore />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
});

export default UserSpace;
