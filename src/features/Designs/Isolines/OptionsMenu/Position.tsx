import {
  Heading,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import React from 'react';
import { useDesign } from '../../../../contexts/DesignContext';
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import * as icons from './icons';

const Position: React.FunctionComponent = () => {
  const { isolinesState: state, setIsolinesState: setState } = useDesign();
  return (
    <>
      {/* ----- HEADLINE ------ */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Position
      </Heading>
      {/* ----- Zoom SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Zoom
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.zoom > 0.1 &&
            setState((prev) => ({ ...prev, zoom: prev.zoom - 0.2 }))
          }
        >
          <icons.zoomLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="zoom"
          value={state.zoom}
          min={0.1}
          max={2}
          step={0.1}
          onChange={(val) => setState((prev) => ({ ...prev, zoom: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.zoom < 2 &&
            setState((prev) => ({ ...prev, zoom: prev.zoom + 0.2 }))
          }
        >
          <icons.zoomRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- Y POSITION SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Y Position
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.y > -200 && setState((prev) => ({ ...prev, y: prev.y - 100 }))
          }
        >
          <icons.YPosLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={state.y}
          min={-500}
          max={500}
          onChange={(val) => setState((prev) => ({ ...prev, y: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.y < 1500 && setState((prev) => ({ ...prev, y: prev.y + 100 }))
          }
        >
          <icons.YPosRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- X POSITION SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        X Position
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.x > -200 && setState((prev) => ({ ...prev, x: prev.x - 100 }))
          }
        >
          <icons.XPosLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={state.x}
          min={-500}
          max={500}
          onChange={(val) => setState((prev) => ({ ...prev, x: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.x < 1500 && setState((prev) => ({ ...prev, x: prev.x + 100 }))
          }
        >
          <icons.XPosRight />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default Position;
