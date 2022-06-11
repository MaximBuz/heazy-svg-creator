import { Heading, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import VelocityLeft from './Icons/VelocityLeft';
import VelocityRight from './Icons/VelocityRight';
import SizeLeft from './Icons/SizeLeft';
import SizeRight from './Icons/SizeRight';
import { useDesign } from '../../../../contexts/Design';


export interface IShapeProps {
  velocity: number;
  setVelocity: Dispatch<SetStateAction<number>>;
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
}

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
          viewBox={'0 0 224 224'}
          onClick={() => state.radius > 0.5 && setState((prev) => ({ ...prev, radius: prev.radius - 0.1 }))}
        >
          <SizeLeft />
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
          viewBox={'0 0 469 469'}
          onClick={() => state.radius < 2 && setState((prev) => ({ ...prev, radius: prev.radius + 0.1 }))}
        >
          <SizeRight />
        </SliderIconWrapper>
      </HStack>
      
      {/* ----- SIZE SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Size
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 224 224'}
          onClick={() => state.size > 0.1 && setState((prev) => ({ ...prev, size: prev.size - 0.2 }))}
        >
          <SizeLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={state.size}
          min={0.1}
          max={2}
          step={0.1}
          onChange={(val) => setState((prev) => ({ ...prev, size: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 469 469'}
          onClick={() => state.size < 2 && setState((prev) => ({ ...prev, size: prev.size + 0.2 }))}
        >
          <SizeRight />
        </SliderIconWrapper>
      </HStack>
      
      {/* ----- PRESSURE SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Pressure
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 224 224'}
          onClick={() => state.pressure > 0.1 && setState((prev) => ({ ...prev, pressure: prev.pressure - 0.5 }))}
        >
          <SizeLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={state.pressure}
          min={0.1}
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
          viewBox={'0 0 469 469'}
          onClick={() => state.pressure < 3 && setState((prev) => ({ ...prev, pressure: prev.pressure + 0.5 }))}
        >
          <SizeRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- VELOCITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Velocity
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 465 465'}
          onClick={() =>
            state.velocity > 0 && setState((prev) => ({ ...prev, velocity: state.velocity - 10 }))
          }
        >
          <VelocityLeft />
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
          viewBox={'0 0 444 456'}
          onClick={() =>
            state.velocity < 100 && setState((prev) => ({ ...prev, velocity: state.velocity + 10 }))
          }
        >
          <VelocityRight />
        </SliderIconWrapper>
      </HStack>
      
      {/* ----- DEPTH SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Depth
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 465 465'}
          onClick={() =>
            state.depth > 0 && setState((prev) => ({ ...prev, depth: state.depth - 1 }))
          }
        >
          <VelocityLeft />
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
          viewBox={'0 0 444 456'}
          onClick={() =>
            state.depth < 20 && setState((prev) => ({ ...prev, depth: state.depth + 1 }))
          }
        >
          <VelocityRight />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default Shape;
