import React, { Dispatch, SetStateAction, useState } from 'react';

// Design
import { Flex, Text, Image, Box, HStack, Tooltip } from '@chakra-ui/react';

// Utils
import { IDesignModes } from '../Canvas/Types/designModes';
import { CopyIcon, DeleteIcon, DownloadIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export interface IThumbnailProps {
  imageSrc: string;
  caption: string;
  setDesign?: Dispatch<SetStateAction<IDesignModes>>;
  isPublic: boolean;
  timesCopied: Number;
  copiedFrom: any;
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({
  imageSrc,
  caption,
  setDesign,
  isPublic,
  timesCopied,
  copiedFrom,
}) => {
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
        sx={active ? { transform: 'scale(1.15) translate(0, -0.8em)' } : {}}
      >
        {caption}
      </Text>
      {active && isPublic && (
        <Tooltip
          bgColor="#21272e64"
          color="white"
          label="Number of times copied by others"
          placement="right"
          aria-label="Use this template"
        >
          <HStack
            opacity={0.5}
            fontSize="sm"
            _hover={{ opacity: 1 }}
            top="1em"
            left="1em"
            position="absolute"
            zIndex={10}
          >
            <DownloadIcon></DownloadIcon>
            <Text>{String(timesCopied)}</Text>
          </HStack>
        </Tooltip>
      )}
      <HStack
        align="center"
        justify="center"
        transition="0.3s"
        sx={active ? { opacity: 1, transform: 'translate(0, 0.8em)' } : { opacity: 0 }}
        position="absolute"
        zIndex={10}
      >
        <Tooltip bgColor="#21272e64" color="white" label="Use this template" aria-label="Use this template">
          <CopyIcon _hover={{ transform: 'scale(1.15)' }} textTransform="capitalize" transition="0.2s" />
        </Tooltip>
        {isPublic ? (
          <Tooltip
            bgColor="#21272e64"
            color="white"
            label="Make this template private"
            aria-label="Make this template private"
          >
            <ViewOffIcon
              _hover={{ transform: 'scale(1.15)' }}
              textTransform="capitalize"
              transition="0.2s"
            ></ViewOffIcon>
          </Tooltip>
        ) : (
          <Tooltip
            bgColor="#21272e64"
            color="white"
            label="Make this template available to others"
            aria-label="Make this template available to others"
          >
            <ViewIcon
              _hover={{ transform: 'scale(1.15)' }}
              textTransform="capitalize"
              transition="0.2s"
            ></ViewIcon>
          </Tooltip>
        )}
        <Tooltip bgColor="#21272e64" color="white" label="Delete template" aria-label="Delete template">
          <DeleteIcon _hover={{ transform: 'scale(1.15)' }} textTransform="capitalize" transition="0.2s" />
        </Tooltip>
      </HStack>
    </Flex>
  );
};

export default Thumbnail;
