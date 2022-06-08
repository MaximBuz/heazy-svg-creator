import React, { Dispatch, SetStateAction, useState } from 'react';

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
  const [active, setActive] = useState<Boolean>(false);
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      transition="0.5s"
      _hover={{ cursor: 'pointer' }}
      onClick={() => {
        setActive(!active);
      }}
    >
      <Box transition="0.5s" rounded="xl" w="100%" h="100%" overflow="hidden" background="transparent">
        <Image
          w="100%"
          as={motion.img}
          whileHover={!active ? { scale: 1.15 } : {}}
          transition="filter 0.3s"
          sx={active ? { filter: 'blur(1px) brightness(80%)' } : { filter: 'blur(0px) brightness(100%)' }}
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
        sx={active ? { transform: 'scale(1.1)' } : {}}
      >
        {caption}
      </Text>
    </Flex>
  );
};

export default Thumbnail;
