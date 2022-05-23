import {
  Heading,
  HStack,
  Popover,
  PopoverTrigger as OrigPopoverTrigger,
  Circle,
  InputGroup,
  InputLeftElement,
  Input,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react';
import React from 'react';
import ColorPicker from 'react-color';
import rgbHex from 'rgb-hex';
import { IMarkerColorProps } from '../../../Types/markerProps';
import { IMarkerColorSetterProps } from '../../../Types/markerSetterProps';
import HideColorButton from '../../OptionsMenu/HideColorButton';

const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger;


const Color: React.FunctionComponent<IMarkerColorProps & IMarkerColorSetterProps> = ({
  setBgColor,
  bgColor,
  setStartColor,
  startColor,
  setEndColor,
  endColor,
}) => {
  return (
    <>
      {/* -------------- COLOR -------------- */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Color
      </Heading>

      {/* Backgound Color */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Background
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={bgColor}
                boxShadow="0 0 0 1px #52555A"
                as="button"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement opacity={0.7} pointerEvents="none" children="#" />
              <Input value={bgColor.replace('#', '')} onChange={(e) => setBgColor(`#${e.target.value}`)} />
            </InputGroup>
          </HStack>
          <PopoverContent rootProps={{ style: { right: 0 } }} width="fit-content">
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={bgColor}
                onChange={(col) => setBgColor('#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a))}
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HideColorButton color={bgColor} setColor={setBgColor} />
      </HStack>

      {/* Wave Start Color */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Start color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={startColor}
                boxShadow="0 0 0 1px #52555A"
                as="button"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement opacity={0.7} pointerEvents="none" children="#" />
              <Input
                value={startColor.replace('#', '')}
                onChange={(e) => setStartColor(`#${e.target.value}`)}
              />
            </InputGroup>
          </HStack>
          <PopoverContent rootProps={{ style: { right: 0 } }} width="fit-content">
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={startColor}
                onChange={(col) =>
                  setStartColor('#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a))
                }
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HideColorButton color={startColor} setColor={setStartColor} />
      </HStack>

      {/* Wave Start Color */}
      <Heading as="h4" size="xs" opacity={0.5}>
        End color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={endColor}
                boxShadow="0 0 0 1px #52555A"
                as="button"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement opacity={0.7} pointerEvents="none" children="#" />
              <Input
                value={endColor.replace('#', '')}
                onChange={(e) => setEndColor(`#${e.target.value}`)}
              />
            </InputGroup>
          </HStack>
          <PopoverContent rootProps={{ style: { right: 0 } }} width="fit-content">
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={endColor}
                onChange={(col) => setEndColor('#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a))}
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HideColorButton color={endColor} setColor={setEndColor} />
      </HStack>
    </>
  );
};

export default Color;
