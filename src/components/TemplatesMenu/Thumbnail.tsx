import React, { Dispatch, SetStateAction } from 'react';

// Design
import { Flex, Text, Image, Box } from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { IDesignModes } from '../DesignTemplates/Canvas/Types/designModes';

export interface IThumbnailProps {
  isActive: boolean;
  image: string;
  caption: IDesignModes;
  setDesign: Dispatch<SetStateAction<IDesignModes>>;
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({ isActive, image, caption, setDesign }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p="4"
      position="relative"
      transition="0.5s"
      _hover={{ background: '#3b4453', cursor: 'pointer' }}
      onClick={() => {
        setDesign(caption);
      }}
    >
      <Box
        transition="0.5s"
        boxShadow={isActive ? '0px 0px 0px 5px #90CCF4' : null}
        rounded="xl"
        w="100%"
        h="100%"
        overflow="hidden"
        background="transparent"
      >
        <Image
          w="100%"
          boxShadow={isActive ? '0px 0px 0px 5px #90CCF4' : null}
          as={motion.img}
          whileHover={{ scale: 1.15 }}
          src={image}
          rounded="xl"
        />
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
