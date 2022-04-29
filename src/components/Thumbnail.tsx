import React from 'react';

// Design
import { Flex, Stack, Text, Image, Heading, Box, Icon } from '@chakra-ui/react';
import stackedWave from '../stackedWaves.svg';
import bubble from '../bubble.svg';
import Logo from '../Logo.svg';
import { UilLinkedin } from '@iconscout/react-unicons';

// Utils
import { motion } from 'framer-motion';

export interface IThumbnailProps {
  image: string;
  caption: string;
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({image, caption}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p="4"
      position="relative"
      _hover={{ background: '#2e3643', cursor: 'pointer' }}
    >
      <Box rounded="xl" w="100%" h="100%" overflow="hidden">
        <Image w="100%" as={motion.img} whileHover={{ scale: 1.25 }} src={image} rounded="xl" />
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
        {caption}
      </Text>
    </Flex>
  );
};

export default Thumbnail;
