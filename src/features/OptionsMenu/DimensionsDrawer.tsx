import React from 'react';
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
import { IDimensionsDrawerProps } from './types/OptionsMenu.types';

const DimensionsDrawer: React.FunctionComponent<IDimensionsDrawerProps> = ({
  isOpen,
  onClose,
  drawerButtonRef,
  setHeight,
  setWidth,
  height,
  width,
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={drawerButtonRef}
    >
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
                <ChevronLeftIcon onClick={onClose} />
              </Circle>
              <Heading
                as="h3"
                size="xs"
                textTransform="uppercase"
                textAlign="center"
              >
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
                <Input
                  value={width}
                  onChange={(e) =>
                    e.target.value[0] !== '0' &&
                    setWidth(Number(e.target.value))
                  }
                />
                <InputRightElement
                  fontWeight="light"
                  opacity={0.7}
                  fontSize="sm"
                  children="px"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  fontWeight="light"
                  opacity={0.7}
                  fontSize="sm"
                  pointerEvents="none"
                  children="h"
                />
                <Input
                  value={height}
                  onChange={(e) =>
                    e.target.value[0] !== '0' &&
                    setHeight(Number(e.target.value))
                  }
                />
                <InputRightElement
                  fontWeight="light"
                  opacity={0.7}
                  fontSize="sm"
                  children="px"
                />
              </InputGroup>
            </HStack>
            <Spacer></Spacer>

            <Heading as="h4" size="xs" opacity={0.5}>
              Common
            </Heading>
            <Divider></Divider>
            <Button
              onClick={() => {
                setHeight(504);
                setWidth(896);
              }}
            >
              16 : 9
            </Button>
            <Button
              onClick={() => {
                setHeight(720);
                setWidth(900);
              }}
            >
              5 : 4
            </Button>
            <Button
              onClick={() => {
                setHeight(675);
                setWidth(900);
              }}
            >
              4 : 3
            </Button>
            <Button
              onClick={() => {
                setHeight(600);
                setWidth(900);
              }}
            >
              3 : 2
            </Button>
            <Button
              onClick={() => {
                setHeight(450);
                setWidth(900);
              }}
            >
              2 : 1
            </Button>
            <Button
              onClick={() => {
                setHeight(700);
                setWidth(700);
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
                setHeight(504);
                setWidth(896);
              }}
            >
              Full HD
            </Button>
            <Button
              onClick={() => {
                setHeight(565);
                setWidth(904);
              }}
            >
              MacBook
            </Button>
            <Button
              onClick={() => {
                setHeight(2532 / 3.75);
                setWidth(1170 / 3.75);
              }}
            >
              iPhone 13
            </Button>
            <Button
              onClick={() => {
                setHeight(3040 / 4.5);
                setWidth(1440 / 4.5);
              }}
            >
              Galaxy S10
            </Button>
            <Button
              onClick={() => {
                setHeight(1334 / 2);
                setWidth(750 / 2);
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
