import React, { useRef } from 'react';

// Design
import {
  Flex,
  Stack,
  Button,
  Heading,
  Divider,
  useDisclosure,
  Input,
  Container,
  Circle,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  HStack,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons';

export interface IRightMenuProps {
  onClick: () => void;
  canvasSize: {
    width: number;
    height: number;
    widthRatio: number;
    heightRatio: number;
  };
}

const RightMenu: React.FunctionComponent<IRightMenuProps> = ({ onClick, canvasSize }) => {
  const {
    isOpen: isDimensionDrawerOpen,
    onOpen: onDimensionDrawerOpen,
    onClose: onDimensionDrawerClose,
  } = useDisclosure();
  const dimensionDrawerButtonRef = useRef();
  return (
    <Flex
      minW="320px"
      maxW="320px"
      height="100vh"
      bgColor="#1c1f27"
      direction="column"
      boxShadow="dark-lg"
      p="0"
      h="100%"
      zIndex={20}
    >
      <Stack flexGrow={1} padding={5} spacing={4}>
        <Heading as="h3" size="xs" textTransform="uppercase">
          Dimensions
        </Heading>
        <Flex
          as={motion.button}
          w="100%"
          h="60px"
          bgColor="#262a33"
          rounded={10}
          justifyContent="space-between"
          alignItems="center"
          padding={5}
          ref={dimensionDrawerButtonRef}
          onClick={onDimensionDrawerOpen}
        >
          <Flex direction="column" textAlign="left">
            <Heading
              fontSize="sm"
              fontWeight="bolder"
            >{`${canvasSize.widthRatio}:${canvasSize.heightRatio}`}</Heading>
            <Heading
              fontSize="sm"
              fontWeight="light"
              opacity={0.7}
            >{`${canvasSize.width} x ${canvasSize.height}`}</Heading>
          </Flex>
          <ChevronRightIcon boxSize={6} />
        </Flex>
        <Divider></Divider>
      </Stack>
      <Flex
        minW="320px"
        maxW="320px"
        height="70px"
        minH="70px"
        zIndex={20}
        bgColor="#262a33"
        justifyContent="space-around"
        alignItems="center"
      >
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<DownloadIcon />} onClick={onClick} colorScheme="blue" variant="solid">
            Download SVG
          </Button>
          <Button colorScheme="gray" variant="outline">
            PNG
          </Button>
        </Stack>
      </Flex>

      {/* DIMENSIONS DRAWER */}
      <Drawer
        isOpen={isDimensionDrawerOpen}
        placement="right"
        onClose={onDimensionDrawerClose}
        finalFocusRef={dimensionDrawerButtonRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#1c1f27">
          <DrawerHeader>
            <Stack spacing={2.5}>
              <Flex alignItems="center" justifyContent="center">
                <Circle
                  as="button"
                  padding={1}
                  _hover={{ background: '#2e3643', cursor: 'pointer' }}
                  position="absolute"
                  left="5"
                  rounded="full"
                  centerContent
                >
                  <ChevronLeftIcon onClick={onDimensionDrawerClose}/>
                </Circle>
                <Heading as="h3" size="xs" textTransform="uppercase" textAlign="center">
                  Dimensions
                </Heading>
              </Flex>
              <Divider></Divider>
              <HStack>
                <InputGroup>
                  <InputLeftElement
                    fontWeight="light"
                    opacity={0.7}
                    pointerEvents="none"
                    fontSize="sm"
                    children="w"
                  />
                  <Input value={canvasSize.width} />
                  <InputRightElement fontWeight="light" opacity={0.7} fontSize="sm" children="px" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    fontWeight="light"
                    opacity={0.7}
                    fontSize="sm"
                    pointerEvents="none"
                    children="h"
                  />
                  <Input value={canvasSize.height} />
                  <InputRightElement fontWeight="light" opacity={0.7} fontSize="sm" children="px" />
                </InputGroup>
              </HStack>
            </Stack>
          </DrawerHeader>
          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default RightMenu;
