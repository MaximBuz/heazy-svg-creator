import {
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
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
import React, { Dispatch, SetStateAction } from 'react';
import ColorPicker from 'react-color';
import rgbHex from 'rgb-hex';
import HideColorButton from '../HideColorButton';

export interface IShadowProps {
  shadowX: number;
  setShadowX: Dispatch<SetStateAction<number>>;
  shadowY: number;
  setShadowY: Dispatch<SetStateAction<number>>;
  shadowSD: number;
  setShadowSD: Dispatch<SetStateAction<number>>;
  shadowColor: string;
  setShadowColor: Dispatch<SetStateAction<string>>;
}

const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger;

const Shadow: React.FunctionComponent<IShadowProps> = ({
  shadowX,
  setShadowX,
  shadowSD,
  setShadowSD,
  shadowColor,
  setShadowColor,
  shadowY,
  setShadowY,
}) => {
  return (
    <>
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shadow / Blur
      </Heading>

      <Heading as="h4" size="xs" opacity={0.5}>
        Offset X
      </Heading>
      <Slider
        aria-label="shadow-x-offset"
        defaultValue={shadowX}
        min={-50}
        max={50}
        onChange={(val) => setShadowX(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Heading as="h4" size="xs" opacity={0.5}>
        Offset Y
      </Heading>
      <Slider
        aria-label="shadow-y-offset"
        defaultValue={shadowY}
        min={-10}
        max={50}
        onChange={(val) => setShadowY(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Heading as="h4" size="xs" opacity={0.5}>
        Radius
      </Heading>
      <Slider
        aria-label="shadow-blur-radius"
        defaultValue={shadowSD}
        min={0}
        max={25}
        onChange={(val) => setShadowSD(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Heading as="h4" size="xs" opacity={0.5}>
        Color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                as="button"
                size="36px"
                bgColor={shadowColor}
                boxShadow="0 0 0 1px #52555A"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement opacity={0.7} pointerEvents="none" children="#" />
              <Input
                value={shadowColor.replace('#', '')}
                onChange={(e) => setShadowColor(`#${e.target.value}`)}
              />
            </InputGroup>
            <HideColorButton color={shadowColor} setColor={setShadowColor} />
          </HStack>
          <PopoverContent rootProps={{ style: { right: 0 } }} width="fit-content">
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={shadowColor}
                onChange={(col) => setShadowColor('#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a))}
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
    </>
  );
};

export default Shadow;
