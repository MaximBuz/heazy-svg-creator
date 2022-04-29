import React from 'react';

// Design
import { Flex, Stack, Text, Image, Heading, Box, Icon, Button } from '@chakra-ui/react';
import stackedWave from '../stackedWaves.svg';
import bubble from '../bubble.svg';
import Logo from '../Logo.svg';
import { UilLinkedin } from '@iconscout/react-unicons';

// Utils
import { motion } from 'framer-motion';
import { DownloadIcon } from '@chakra-ui/icons';

export interface IRightMenuProps {}

const RightMenu: React.FunctionComponent<IRightMenuProps> = (props) => {
  return (
    <Flex
      minW="300px"
      maxW="300px"
      height="100vh"
      position="fixed"
      right="0"
      top="0"
      bgColor="#1c1f27"
      direction="column"
      boxShadow="dark-lg"
      p="0"
      h="100%"
    >
      <Stack flexGrow={1}></Stack>
      <Flex
        minW="300px"
        maxW="300px"
        height="70px"
        minH="70px"
        zIndex={20}
        bgColor="#262a33"
        justifyContent="space-around"
        alignItems="center"
      >
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<DownloadIcon />} colorScheme="blue" variant="solid">
            Download SVG
          </Button>
          <Button colorScheme="gray" variant="outline">
            PNG
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default RightMenu;
