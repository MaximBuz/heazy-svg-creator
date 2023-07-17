import React, { useState } from 'react';

// Design
import { Flex, Text, Image, Box, HStack, Tooltip } from '@chakra-ui/react';

// Utils
import {
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
  ViewIcon,
  ViewOffIcon,
} from '@chakra-ui/icons';
import { useMutation, useQuery } from 'react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { deleteObject, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebase';
import { IOwnThumbnailProps } from './types/OwnThumbnailProps.types';

const OwnThumbnail: React.FunctionComponent<IOwnThumbnailProps> = ({
  id,
  mutation,
  imageSrc,
  caption,
  set,
  isPublic,
  timesCopied,
  copiedFrom,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const { data: thumbnailUrl, isSuccess } = useQuery(['thumbnail', id], () =>
    getDownloadURL(ref(storage, imageSrc))
  );
  const deletion = useMutation(['thumbnail', id], () =>
    deleteObject(ref(storage, imageSrc))
  );

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
            label="Use this template"
            aria-label="Use this template"
          >
            <CopyIcon
              _hover={{ transform: 'scale(1.15)' }}
              textTransform="capitalize"
              transition="0.2s"
              onClick={() => set()}
            />
          </Tooltip>
          {copiedFrom ? (
            <Tooltip
              bgColor="#21272e64"
              color="white"
              label={`You copied this template from ${copiedFrom}`}
              aria-label={`You copied this template from ${copiedFrom}`}
            >
              <ViewOffIcon
                _hover={{ transform: 'scale(1.15)', opacity: 0.5 }}
                cursor="not-allowed"
                textTransform="capitalize"
                transition="0.2s"
              ></ViewOffIcon>
            </Tooltip>
          ) : isPublic ? (
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
                onClick={() => mutation.mutate({ id, public: false })}
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
                onClick={() => mutation.mutate({ id, public: true })}
              ></ViewIcon>
            </Tooltip>
          )}
          <Tooltip
            bgColor="#21272e64"
            color="white"
            label="Delete template"
            aria-label="Delete template"
          >
            <DeleteIcon
              _hover={{ transform: 'scale(1.15)' }}
              textTransform="capitalize"
              transition="0.2s"
              onClick={() => {
                mutation.mutate({ id, delete: true });
                deletion.mutate();
              }}
            />
          </Tooltip>
        </HStack>
      </Flex>
    </AnimatePresence>
  );
};

export default OwnThumbnail;
