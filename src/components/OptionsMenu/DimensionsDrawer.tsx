import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  Stack,
  Flex,
  Circle,
  Heading,
  Divider,
  DrawerBody,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Spacer,
  Button,
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

export interface IDimensionsDrawerProps {
  isDimensionDrawerOpen: boolean;
  onDimensionDrawerClose: () => void;
  dimensionDrawerButtonRef: any;
  handleHeightChange: Dispatch<SetStateAction<number>>;
  handleWidthChange: Dispatch<SetStateAction<number>>;
  height: number;
  width: number;
}

const DimensionsDrawer: React.FunctionComponent<IDimensionsDrawerProps> = ({
  isDimensionDrawerOpen,
  onDimensionDrawerClose,
  dimensionDrawerButtonRef,
  handleHeightChange,
  handleWidthChange,
  height,
  width,
}) => {
  return (
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
  );
};

export default DimensionsDrawer;
