import React, { memo } from 'react';
import { useAuth } from '../../contexts/Auth';
import { useGetUserByFirebaseIdQuery } from '../../graphql/generated';
import { endpoint, headers } from '../../utils/apiConfig';

// Images
import Placeholder from '../../assets/Thumbnails/placeholderWaves.png';
import ErrorImg from '../../assets/Error.svg';

// Components
import Thumbnail from './Thumbnail';

// Design
import { Jelly } from '@uiball/loaders';
import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';

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
    <Flex
      direction="column"
      textAlign="center"
      gap="10px"
    >
      <Box>
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
            <AccordionButton _hover={{ bg: '#3b4453' }} _focus={{ boxShadow: 'none' }}>
              <Box flex="1" textAlign="center">
                Explore
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel p="0.5em">Test</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _hover={{ bg: '#3b4453' }} _focus={{ boxShadow: 'none' }}>
              <Box flex="1" textAlign="center">
                Your templates
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel p="0.5em">
            <Stack
              spacing={0}
            >
              {userQuery.isSuccess &&
                userQuery.data.user.designs.map((design) => (
                  <Thumbnail
                    imageSrc={design.thumbnailUrl === 'null' ? Placeholder : design.thumbnailUrl}
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
