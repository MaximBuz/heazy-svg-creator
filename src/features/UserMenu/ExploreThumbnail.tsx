import React, { useState } from 'react';

// Design
import { Flex, Text, Image, Box, HStack, Tooltip } from '@chakra-ui/react';

// Utils
import { DownloadIcon } from '@chakra-ui/icons';
import { useQuery } from 'react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebase';

// Images
import placeholderWaves from '../../assets/Thumbnails/placeholderWaves.png';
import placeholderBubble from '../../assets/Thumbnails/placeholderBubble.png';
import placeholderCorners from '../../assets/Thumbnails/placeholderCorners.png';
import placeholderMarker from '../../assets/Thumbnails/placeholderMarker.png';
// import placeholderIsolines from '../../assets/Thumbnails/placeholderIsolines.png';
import { useAuth } from '../../contexts/AuthContext';
import { IExploreThumbnailProps } from './types/ExploreThumbnailProps.types';

const ExploreThumbnail: React.FunctionComponent<IExploreThumbnailProps> = ({
  copyTemplate,
  design,
  increment,
}) => {
  const { firebaseUser } = useAuth();

  const [active, setActive] = useState<boolean>(false);

  const { data: thumbnailUrl, isSuccess } = useQuery(
    ['thumbnail', design.id],
    () => getDownloadURL(ref(storage, design.thumbnailUrl))
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
      : design.type.name === 'markers'
      ? placeholderMarker
      : design.type.name === 'isolines'
      ? placeholderMarker // here put isolines placeholder
      : placeholderMarker; // here put flare placeholder

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
        <Box
          rounded="xl"
          w="100%"
          h="100%"
          overflow="hidden"
          background="transparent"
        >
          <Image
            w="100%"
            maxH="160px"
            minH="160px"
            transition="0.3s"
            objectFit="cover"
            sx={
              active
                ? {
                    filter: 'blur(1px) brightness(50%)',
                    transform: 'scale(1.1)',
                  }
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
          sx={
            active
              ? { opacity: 1, transform: 'translate(0, 0.8em)' }
              : { opacity: 0 }
          }
          position="absolute"
          zIndex={10}
        >
          <Tooltip
            bgColor="#21272e64"
            color="white"
            label={
              design?.user?.firebaseId === firebaseUser?.uid
                ? 'You created this template'
                : 'Get template'
            }
            aria-label={
              design?.user?.firebaseId === firebaseUser?.uid
                ? 'You created this template'
                : 'Get template'
            }
          >
            <DownloadIcon
              _hover={{
                transform: 'scale(1.15)',
                opacity:
                  design?.user?.firebaseId === firebaseUser?.uid ? 0.5 : 1,
                cursor:
                  design?.user?.firebaseId === firebaseUser?.uid
                    ? 'not-allowed'
                    : 'pointer',
              }}
              textTransform="capitalize"
              transition="0.2s"
              as="button"
              disabled={design?.user?.firebaseId !== firebaseUser?.uid}
              onClick={() => {
                copyTemplate.mutate(
                  {
                    optionParameters: design.optionParameters,
                    copiedFromUserId: design.user.id,
                    name: design.name,
                    public: true,
                    thumbnailUrl: design.thumbnailUrl,
                    typeId: design.type.id,
                  },
                  { onSuccess: () => increment.mutate({ id: design.id }) }
                );
              }}
            />
          </Tooltip>
        </HStack>
      </Flex>
    </AnimatePresence>
  );
};

export default ExploreThumbnail;
