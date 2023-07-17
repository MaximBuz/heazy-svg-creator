import {
  Heading,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import React from 'react';
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import { useDesign } from '../../../../contexts/DesignContext';
import * as icons from './icons';

const Shape: React.FunctionComponent = () => {
  const { isolinesState: state, setIsolinesState: setState } = useDesign();
  return (
    <>
      {/* ----- HEADLINE ------ */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shape
      </Heading>

      {/* ----- RADIUS SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Radius
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.radius > 0.5 &&
            setState((prev) => ({ ...prev, radius: prev.radius - 0.1 }))
          }
        >
          <icons.radiusLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="radius"
          value={state.radius}
          min={0.5}
          max={1}
          step={0.1}
          onChange={(val) => setState((prev) => ({ ...prev, radius: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.radius < 2 &&
            setState((prev) => ({ ...prev, radius: prev.radius + 0.1 }))
          }
        >
          <icons.radiusRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- PRESSURE SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Pressure
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.pressure > 0.7 &&
            setState((prev) => ({ ...prev, pressure: prev.pressure - 0.5 }))
          }
        >
          <icons.pressureLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={state.pressure}
          min={0.7}
          max={3}
          step={0.1}
          onChange={(val) => setState((prev) => ({ ...prev, pressure: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 550'}
          onClick={() =>
            state.pressure < 3 &&
            setState((prev) => ({ ...prev, pressure: prev.pressure + 0.5 }))
          }
        >
          <icons.pressureRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- VELOCITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Velocity
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.velocity > 0 &&
            setState((prev) => ({ ...prev, velocity: state.velocity - 10 }))
          }
        >
          <icons.velocityLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="velocity"
          value={state.velocity}
          min={0}
          max={100}
          onChange={(val) => setState((prev) => ({ ...prev, velocity: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.velocity < 100 &&
            setState((prev) => ({ ...prev, velocity: state.velocity + 10 }))
          }
        >
          <icons.velocityRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- DEPTH SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Depth
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.depth > 0 &&
            setState((prev) => ({ ...prev, depth: state.depth - 1 }))
          }
        >
          <icons.depthLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="depth"
          value={state.depth}
          min={0}
          max={20}
          onChange={(val) => setState((prev) => ({ ...prev, depth: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.depth < 20 &&
            setState((prev) => ({ ...prev, depth: state.depth + 1 }))
          }
        >
          <icons.depthRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- Distance SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Distance
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.distance > 0 &&
            setState((prev) => ({ ...prev, distance: state.distance - 20 }))
          }
        >
          <icons.depthRight />
        </SliderIconWrapper>

        <Slider
          aria-label="distance"
          value={state.distance}
          min={0}
          max={200}
          onChange={(val) => setState((prev) => ({ ...prev, distance: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.distance < 200 &&
            setState((prev) => ({ ...prev, distance: state.distance + 20 }))
          }
        >
          <icons.depthLeft />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default Shape;
