// React
import React, { Dispatch, memo, SetStateAction } from 'react';

// Styles
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

// Components
import HideColorButton from './HideColorButton';
import ColorPicker from 'react-color';
import rgbHex from 'rgb-hex';

// Types
import { ISharedOptionsProps } from './types/OptionsMenu.types';
import { IWaveAllProps } from '../Designs/Waves/types/WaveProps.types';
import { IBubbleAllProps } from '../Designs/Bubble/types/Bubble.types';
import { ICornerAllProps } from '../Designs/Corners/types/Corners.types';
import { IMarkerAllProps } from '../Designs/Marker/types/MarkerProps.types';

const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const ShadowOptions: React.FunctionComponent<
  ISharedOptionsProps<
    IWaveAllProps | IBubbleAllProps | IMarkerAllProps | ICornerAllProps
  >
> = memo(({ state, setState }) => {
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
        defaultValue={state.shadowX}
        min={-50}
        max={50}
        onChange={(val) => setState((prev) => ({ ...prev, shadowX: val }))}
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
        defaultValue={state.shadowY}
        min={-10}
        max={50}
        onChange={(val) => setState((prev) => ({ ...prev, shadowY: val }))}
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
        defaultValue={state.shadowSD}
        min={0}
        max={25}
        onChange={(val) => setState((prev) => ({ ...prev, shadowSD: val }))}
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
                bgColor={state.shadowColor}
                boxShadow="0 0 0 1px #52555A"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement
                opacity={0.7}
                pointerEvents="none"
                children="#"
              />
              <Input
                value={state.shadowColor.replace('#', '')}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    shadowColor: `#${e.target.value}`,
                  }))
                }
              />
            </InputGroup>
            <HideColorButton
              color={state.shadowColor}
              setColor={(color) =>
                setState((prev) => ({ ...prev, shadowColor: color }))
              }
            />
          </HStack>
          <PopoverContent
            rootProps={{ style: { right: 0 } }}
            width="fit-content"
          >
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={state.shadowColor}
                // onChange={(col) => setShadowColor('#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a))}
                onChange={(col) =>
                  setState((prev) => ({
                    ...prev,
                    shadowColor:
                      '#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
                  }))
                }
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
});

export default ShadowOptions;
