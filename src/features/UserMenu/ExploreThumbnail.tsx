import React, { useState } from 'react';

// Design
import { Flex, Text, Image, Box, HStack, Tooltip } from '@chakra-ui/react';

// Utils
import { CopyIcon, DownloadIcon } from '@chakra-ui/icons';
import { useQuery } from 'react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebase';
import { IExploreThumbnailProps } from '../../types/userMenuExploreThumbnailProps';

// Images
import placeholderWaves from '../../assets/Thumbnails/placeholderWaves.png';
import placeholderBubble from '../../assets/Thumbnails/placeholderBubble.png';
import placeholderCorners from '../../assets/Thumbnails/placeholderCorners.png';
import placeholderMarker from '../../assets/Thumbnails/placeholderMarker.png';

const ExploreThumbnail: React.FunctionComponent<IExploreThumbnailProps> = ({ mutation, design }) => {
  const [active, setActive] = useState<Boolean>(false);
  const { data: thumbnailUrl, isSuccess } = useQuery(['thumbnail', design.id], () =>
    getDownloadURL(ref(storage, design.thumbnailUrl))
  );

  const imageSrc =
    design.thumbnailUrl !== 'null'
      ? design.thumbnailUrl
      : design.type.name === 'waves'
      ? placeholderWaves
      : design.type.name === 'bubble'
      ? placeholderBubble
      : design.type.name === 'corners'
      ? placeholderCorners
      : placeholderMarker;

  return (
    <AnimatePresence>
      <Flex
        justifyContent="center"
        alignItems="center"
        position="relative"
        as={motion.div}
        _hover={{ cursor: 'pointer' }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        initial={{ bottom: '-50px', opacity: 0.5 }}
        animate={{ bottom: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        //@ts-expect-error
        transition={{
          duration: 0.4,
          type: 'spring',
          bounce: 0,
        }}
      >
        <Box rounded="xl" w="100%" h="100%" overflow="hidden" background="transparent">
          <Image
            w="100%"
            transition="0.3s"
            sx={
              active
                ? { filter: 'blur(1px) brightness(50%)', transform: 'scale(1.1)' }
                : { filter: 'blur(0px) brightness(80%)', transform: 'scale(1)' }
            }
            src={isSuccess ? thumbnailUrl : imageSrc}
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
          {design.name}
        </Text>
        {active && design.public && (
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
              <Text>{String(design.timesCopied)}</Text>
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
            <CopyIcon
              _hover={{ transform: 'scale(1.15)' }}
              textTransform="capitalize"
              transition="0.2s"
              onClick={() =>
                mutation.mutate({
                  optionParameters: design.optionParameters,
                  copiedFromUserId: design.user.id,
                  name: design.name,
                  public: true,
                  thumbnailUrl: design.thumbnailUrl,
                  typeId: design.typeId,
                })
              }
            />
          </Tooltip>
        </HStack>
      </Flex>
    </AnimatePresence>
  );
};

export default ExploreThumbnail;
