import React, { Dispatch, SetStateAction } from 'react';

// Design
import { Flex, Text, Image, Box } from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { useUserSpace } from '../../contexts/UserSpaceContext';
import { useEventLogger } from '../../hooks/useEventLogger';
import { IDesignMode } from '../../contexts/types/DesignContext.types';

export interface IThumbnailProps {
  isActive: boolean;
  image: string;
  setDesign: Dispatch<SetStateAction<IDesignMode>>;
  type: IDesignMode;
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({
  isActive,
  image,
  setDesign,
  type,
}) => {
  const { isOpen: userSpaceIsOpen, onClose: closeUserSpace } = useUserSpace();

  const { sendEventLog } = useEventLogger();

  const onSelectDesign = () => {
    if (userSpaceIsOpen) {
      closeUserSpace();
    }
    sendEventLog('choose_design', { type });
    setDesign(type);
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p="4"
      position="relative"
      transition="0.5s"
      _hover={{ background: '#3b4453', cursor: 'pointer' }}
      onClick={onSelectDesign}
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
        {type.name}
      </Text>
    </Flex>
  );
};

export default Thumbnail;
