import React, { Dispatch, SetStateAction, useState } from 'react';

// Design
import { Flex, Text, Image, Box, HStack } from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { IDesignModes } from '../Canvas/Types/designModes';
import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';

export interface IThumbnailProps {
  imageSrc: string;
  caption: string;
  setDesign?: Dispatch<SetStateAction<IDesignModes>>;
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({ imageSrc, caption, setDesign }) => {
  const [active, setActive] = useState<Boolean>(false);
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      transition="0.5s"
      _hover={{ cursor: 'pointer' }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Box rounded="xl" w="100%" h="100%" overflow="hidden" background="transparent">
        <Image
          w="100%"
          transition="0.3s"
          sx={
            active
              ? { filter: 'blur(1px) brightness(80%)', transform: 'scale(1.1)' }
              : { filter: 'blur(0px) brightness(100%)', transform: 'scale(1)' }
          }
          src={imageSrc}
          rounded="xl"
        />
      </Box>
      <Text
        pointerEvents="none"
        position="absolute"
        zIndex={10}
        fontSize="sm"
        fontWeight="bold"
        align="center"
        textTransform="capitalize"
        transition="0.3s"
        sx={active ? { transform: 'scale(1.15) translate(0, -0.7em)' } : {}}
      >
        {caption}
      </Text>
      <HStack
        align="center"
        justify="center"
        transition="0.3s"
        sx={active ? {opacity: 1, transform: "translate(0, 0.7em)"} : { opacity: 0 }}
        position="absolute"
        zIndex={10}
      >
        <ViewIcon textTransform="capitalize" transition="0.3s" />
        <DeleteIcon textTransform="capitalize" transition="0.3s" />
      </HStack>
    </Flex>
  );
};

export default Thumbnail;
