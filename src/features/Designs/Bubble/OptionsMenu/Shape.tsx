import {
  Heading,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import VelocityLeft from './Icons/VelocityLeft';
import VelocityRight from './Icons/VelocityRight';
import SizeLeft from './Icons/SizeLeft';
import SizeRight from './Icons/SizeRight';
import { useDesign } from '../../../../contexts/DesignContext';

export interface IShapeProps {
  velocity: number;
  setVelocity: Dispatch<SetStateAction<number>>;
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
}

const Shape: React.FunctionComponent = () => {
  const { bubbleState: state, setBubbleState: setState } = useDesign();
  return (
    <>
      {/* ----- HEADLINE ------ */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shape
      </Heading>

      {/* ----- Sice SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Size
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 224 224'}
          onClick={() =>
            state.size > 0 &&
            setState((prev) => ({ ...prev, size: prev.size - 10 }))
          }
        >
          <SizeLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={state.size}
          min={0}
          max={300}
          onChange={(val) => setState((prev) => ({ ...prev, size: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 469 469'}
          onClick={() =>
            state.size < 300 &&
            setState((prev) => ({ ...prev, size: prev.size + 10 }))
          }
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
            state.velocity > 0 &&
            setState((prev) => ({ ...prev, velocity: state.velocity - 10 }))
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
            state.velocity < 100 &&
            setState((prev) => ({ ...prev, velocity: state.velocity + 10 }))
          }
        >
          <VelocityRight />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default Shape;
