import React from 'react';

// Design
import { Flex, Stack, Text, Image, Heading, Box, Icon } from '@chakra-ui/react';
import stackedWave from '../stackedWaves.svg';
import bubble from '../bubble.svg';
import Logo from '../Logo.svg';
import { UilLinkedin } from '@iconscout/react-unicons';

// Utils
import { motion } from 'framer-motion';

export interface ILeftMenuProps {}

const LeftMenu: React.FunctionComponent<ILeftMenuProps> = (props) => {
  return (
    <Flex
      minW="180px"
      maxW="180px"
      height="100vh"
      position="fixed"
      left="0"
      top="0"
      bgColor="#1c1f27"
      direction="column"
      boxShadow="dark-lg"
      p="0"
      h="100%"
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
        <Flex
          justifyContent="center"
          alignItems="center"
          p="4"
          position="relative"
          _hover={{ background: '#2e3643', cursor: 'pointer' }}
        >
          <Box rounded="xl" w="100%" h="100%" overflow="hidden">
            <Image w="100%" as={motion.img} whileHover={{ scale: 1.25 }} src={stackedWave} rounded="xl" />
          </Box>
          <Text
            as={motion.p}
            pointerEvents="none"
            position="absolute"
            zIndex={10}
            fontSize="sm"
            fontWeight="bold"
            align="center"
          >
            Waves
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          p="4"
          position="relative"
          _hover={{ background: '#2e3643', cursor: 'pointer' }}
        >
          <Box rounded="xl" w="100%" h="100%" overflow="hidden">
            <Image w="100%" as={motion.img} whileHover={{ scale: 1.25 }} src={bubble} rounded="xl" />
          </Box>
          <Text
            as={motion.p}
            pointerEvents="none"
            position="absolute"
            zIndex={10}
            fontSize="sm"
            fontWeight="bold"
            align="center"
          >
            Bubble
          </Text>
        </Flex>
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
