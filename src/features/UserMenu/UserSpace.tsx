import React, { memo, useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { useGetUserByFirebaseIdQuery, useUpdateDesignMutation } from '../../graphql/generated';
import { endpoint, headers } from '../../utils/apiConfig';

// Images
import placeholderWaves from '../../assets/Thumbnails/placeholderWaves.png';
import placeholderBubble from '../../assets/Thumbnails/placeholderBubble.png';
import placeholderCorners from '../../assets/Thumbnails/placeholderCorners.png';
import placeholderMarker from '../../assets/Thumbnails/placeholderMarker.png';
import ErrorImg from '../../assets/Error.svg';

// Components
import Thumbnail from './Thumbnail';

// Design
import { Jelly } from '@uiball/loaders';
import { Box, Flex, Heading, HStack, Icon, Image, Stack } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Input } from '@chakra-ui/react';

export interface IUserSpaceProps {}

const UserSpace: React.FunctionComponent<IUserSpaceProps> = memo((props) => {
  // Auth
  const { currentUser } = useAuth();
  const userQuery = useGetUserByFirebaseIdQuery(
    { endpoint, fetchParams: { headers } },
    { id: currentUser.uid }
  );

  // Mutations
  const designMutation = useUpdateDesignMutation({ endpoint, fetchParams: { headers } });

  // Filter
  const [search, setSearch] = useState<string>('');

  // Render
  if (userQuery.isLoading) {
    return (
      <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
        <Jelly size={80} speed={1} color="#363E4A" />
      </Flex>
    );
  }
  if (userQuery.isError) {
    return (
      <Flex
        direction="column"
        mt="1em"
        textAlign="center"
        gap="10px"
        height="90%"
        justifyContent="center"
        p="5"
      >
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

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: '#3b4453', fontWeight: 'bolder' }}
              _hover={{ bg: '#272c36' }}
              _focus={{ boxShadow: 'none' }}
            >
              <Box flex="1" textAlign="center">
                Explore
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel p="0.5em">Test</AccordionPanel>
        </AccordionItem>

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

            <Stack spacing="5">
              {userQuery.isSuccess &&
                userQuery.data.user.designs
                  .filter((design) => {
                    if (search && !design.name.toLowerCase().includes(search.toLowerCase())) return false;
                    else return true;
                  })
                  .map((design) => (
                    <Thumbnail
                      key={design.id}
                      id={design.id}
                      mutation={designMutation}
                      isPublic={design.public}
                      copiedFrom={design.copiedFrom}
                      timesCopied={design.timesCopied}
                      imageSrc={
                        design.thumbnailUrl !== 'null'
                          ? design.thumbnailUrl
                          : design.type.name === 'waves'
                          ? placeholderWaves
                          : design.type.name === 'bubble'
                          ? placeholderBubble
                          : design.type.name === 'corners'
                          ? placeholderCorners
                          : placeholderMarker
                      }
                      caption={design.name}
                    ></Thumbnail>
                  ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
});

export default UserSpace;
