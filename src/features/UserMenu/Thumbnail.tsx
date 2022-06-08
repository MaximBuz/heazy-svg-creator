import React, { Dispatch, SetStateAction } from 'react';

// Design
import { Flex, Text, Image, Box } from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { IDesignModes } from '../Canvas/Types/designModes';

export interface IThumbnailProps {
  imageSrc: string;
  caption: string;
  setDesign?: Dispatch<SetStateAction<IDesignModes>>;
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({ imageSrc, caption, setDesign }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p="4"
      position="relative"
      transition="0.5s"
      _hover={{ cursor: 'pointer' }}
      // onClick={() => {
      //   setDesign(caption);
      // }}
    >
      <Box transition="0.5s" rounded="xl" w="100%" h="100%" overflow="hidden" background="transparent">
        <Image w="100%" as={motion.img} whileHover={{ scale: 1.15, filter: "brightness(80%)"}} src={imageSrc} rounded="xl" />
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
