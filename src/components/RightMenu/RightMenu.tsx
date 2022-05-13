import React, { Dispatch, ReactElement, ReactNode, Ref, SetStateAction, useRef } from 'react';

// Design
import {
  Flex,
  Stack,
  Button,
  Heading,
  Divider,
  useDisclosure,
  Input,
  Circle,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerHeader, DrawerContent } from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons';
import { downloadSvgAsPng, downloadSVGAsText } from '../../utils/downloadBlob';

export interface IRightMenuProps {
  svgRef: Ref<SVGAElement | null>;
  width: number;
  height: number;
  widthRatio: number;
  heightRatio: number;
  handleWidthChange: Dispatch<SetStateAction<number>>;
  handleHeightChange: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}

const RightMenu: React.FunctionComponent<IRightMenuProps> = ({
  svgRef,
  width,
  height,
  widthRatio,
  heightRatio,
  handleWidthChange,
  handleHeightChange,
  children,
}) => {
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
      overflow="auto"
      sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
    >
      <Stack
        flexGrow={1}
        padding={5}
        spacing={4}
        scrollBehavior="smooth"
        overflow="auto"
        sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {/* --------- DIMENSIONS BUTTON --------- */}
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
          sx={{ transition: '0.5s' }}
          _hover={{ background: '#2e3643', cursor: 'pointer' }}
          ref={dimensionDrawerButtonRef}
          onClick={onDimensionDrawerOpen}
        >
          <Flex direction="column" textAlign="left">
            <Heading fontSize="sm" fontWeight="bolder">{`${widthRatio}:${heightRatio}`}</Heading>
            <Heading fontSize="sm" fontWeight="light" opacity={0.7}>{`${Math.floor(width)} x ${Math.floor(
              height
            )}`}</Heading>
            {/* Devices stuff */}
          </Flex>
          <ChevronRightIcon boxSize={6} />
        </Flex>

        <Divider></Divider>

        {/* --------- DESIGN SPECIFIC OPTIONS --------- */}
        {children}
      </Stack>

      {/* --------- DOWNLOAD SECTION AT BOTTOM --------- */}
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
          <Button
            leftIcon={<DownloadIcon />}
            onClick={() => downloadSVGAsText(svgRef)}
            colorScheme="blue"
            variant="solid"
          >
            Download SVG
          </Button>
          <Button onClick={() => downloadSvgAsPng(svgRef)} colorScheme="gray" variant="outline">
            PNG
          </Button>
        </Stack>
      </Flex>

      {/* --------- DIMENSIONS DRAWER --------- */}
      <Drawer
        isOpen={isDimensionDrawerOpen}
        placement="right"
        onClose={onDimensionDrawerClose}
        finalFocusRef={dimensionDrawerButtonRef}
      >
        {/* <DrawerOverlay /> */}
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
                  <ChevronLeftIcon onClick={onDimensionDrawerClose} />
                </Circle>
                <Heading as="h3" size="xs" textTransform="uppercase" textAlign="center">
                  Dimensions
                </Heading>
              </Flex>
              <Divider></Divider>
            </Stack>
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              <HStack>
                <InputGroup>
                  <InputLeftElement
                    fontWeight="light"
                    opacity={0.7}
                    pointerEvents="none"
                    fontSize="sm"
                    children="w"
                  />
                  <Input value={width} onChange={(e) => handleWidthChange(Number(e.target.value))} />
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
                  <Input value={height} onChange={(e) => handleHeightChange(Number(e.target.value))} />
                  <InputRightElement fontWeight="light" opacity={0.7} fontSize="sm" children="px" />
                </InputGroup>
              </HStack>
              <Spacer></Spacer>

              <Heading as="h4" size="xs" opacity={0.5}>
                Common
              </Heading>
              <Divider></Divider>
              <Button
                onClick={() => {
                  handleHeightChange(504);
                  handleWidthChange(896);
                }}
              >
                16 : 9
              </Button>
              <Button
                onClick={() => {
                  handleHeightChange(720);
                  handleWidthChange(900);
                }}
              >
                5 : 4
              </Button>
              <Button
                onClick={() => {
                  handleHeightChange(675);
                  handleWidthChange(900);
                }}
              >
                4 : 3
              </Button>
              <Button
                onClick={() => {
                  handleHeightChange(600);
                  handleWidthChange(900);
                }}
              >
                3 : 2
              </Button>
              <Button
                onClick={() => {
                  handleHeightChange(450);
                  handleWidthChange(900);
                }}
              >
                2 : 1
              </Button>
              <Button
                onClick={() => {
                  handleHeightChange(700);
                  handleWidthChange(700);
                }}
              >
                1 : 1
              </Button>

              <Spacer></Spacer>
              <Heading as="h4" size="xs" opacity={0.5}>
                Devices
              </Heading>
              <Divider></Divider>
              <Button
                onClick={() => {
                  handleHeightChange(504);
                  handleWidthChange(896);
                }}
              >
                Full HD
              </Button>
              <Button
                onClick={() => {
                  handleHeightChange(565);
                  handleWidthChange(904);
                }}
              >
                MacBook
              </Button>
              <Button
                onClick={() => {
                  handleHeightChange(2532 / 3.75);
                  handleWidthChange(1170 / 3.75);
                }}
              >
                iPhone 13
              </Button>
              <Button
                onClick={() => {
                  handleHeightChange(3040 / 4.5);
                  handleWidthChange(1440 / 4.5);
                }}
              >
                Galaxy S10
              </Button>
              <Button
                onClick={() => {
                  handleHeightChange(1334 / 2);
                  handleWidthChange(750 / 2);
                }}
              >
                iPhone SE
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default RightMenu;
