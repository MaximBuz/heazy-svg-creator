import React from 'react';

// Design
import { Flex, Text, Image, Box } from '@chakra-ui/react';

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
