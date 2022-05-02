import React, { Dispatch, SetStateAction } from 'react';

// Design
import { Flex, Text, Image, Box } from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { IDesignModes } from '../utils/types/designModes';

export interface IThumbnailProps {
  image: string;
  caption: IDesignModes;
  setDesign: Dispatch<SetStateAction<IDesignModes>>;
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({ image, caption, setDesign }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p="4"
      position="relative"
      _hover={{ background: '#2e3643', cursor: 'pointer' }}
      onClick={() => {
        setDesign(caption);
      }}
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
        textTransform="capitalize"
      >
        {caption}
      </Text>
    </Flex>
  );
};

export default Thumbnail;
