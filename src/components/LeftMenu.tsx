import React from 'react';

// Design
import { Flex, Stack, Image, Heading, Icon } from '@chakra-ui/react';
import stackedWave from '../stackedWaves.svg';
import bubble from '../bubble.svg';
import Logo from '../Logo.svg';
import { UilLinkedin } from '@iconscout/react-unicons';

// Utils
import Thumbnail from './Thumbnail';

export interface ILeftMenuProps {}

const LeftMenu: React.FunctionComponent<ILeftMenuProps> = (props) => {
  return (
    <Flex
      minW="180px"
      maxW="180px"
      height="100vh"
      bgColor="#1c1f27"
      direction="column"
      boxShadow="dark-lg"
      p="0"
      h="100%"
      zIndex={20}
    >
      <Flex
        minW="180px"
        maxW="180px"
        height="70px"
        zIndex={20}
        bgColor="#262a33"
        justifyContent="space-around"
        alignItems="center"
      >
        <Image src={Logo} h="50%"></Image>
      </Flex>
      <Stack
        spacing={0}
        scrollBehavior="smooth"
        overflow="scroll"
        flexGrow={1}
        sx={{
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Thumbnail image={stackedWave} caption="Waves"></Thumbnail>
        <Thumbnail image={bubble} caption="Bubble"></Thumbnail>
      </Stack>

      <Flex
        minW="180px"
        maxW="180px"
        height="70px"
        minH="70px"
        zIndex={20}
        bgColor="#262a33"
        justifyContent="space-around"
        alignItems="center"
      >
        <Heading lineHeight="1em" fontWeight="lighter" fontSize="2xl" fontFamily="Karla, sans-serif;">
          HEAZY.
        </Heading>
        <Icon as={UilLinkedin} boxSize="8" cursor="pointer"></Icon>
      </Flex>
    </Flex>
  );
};

export default LeftMenu;
