import {
  Heading,
  HStack,
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import SliderIconWrapper from '../SliderIconWrapper';
import BalanceLeft from '../Icons/BalanceLeft';
import BalanceRight from '../Icons/BalanceRight';
import ComplexityRight from '../Icons/ComplexityRight';
import ComplexityLeft from '../Icons/ComplexityLeft';
import VelocityLeft from '../Icons/VelocityLeft';
import VelocityRight from '../Icons/VelocityRight';
import DistanceLeft from '../Icons/DistanceLeft';
import DistanceRight from '../Icons/DistanceRight';

export interface IShapeProps {
  velocity: number;
  setVelocity: Dispatch<SetStateAction<number>>;
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
}

const Shape: React.FunctionComponent<IShapeProps> = ({ velocity, setVelocity, size, setSize }) => {
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
        <SliderIconWrapper viewBox={'0 0 413 88'} onClick={() => size > 0 && setSize(size - 10)}>
          <VelocityLeft />
        </SliderIconWrapper>

        <Slider aria-label="size" value={size} min={0} max={300} onChange={(val) => setSize(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 412 286'}
          onClick={() => size < 300 && setSize(size + 10)}
        >
          <VelocityRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- VELOCITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Velocity
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 413 88'} onClick={() => velocity > 0 && setVelocity(velocity - 10)}>
          <VelocityLeft />
        </SliderIconWrapper>

        <Slider aria-label="velocity" value={velocity} min={0} max={100} onChange={(val) => setVelocity(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 412 286'}
          onClick={() => velocity < 100 && setVelocity(velocity + 10)}
        >
          <VelocityRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- COMPLEXITY SLIDER ------ */}
      {/* <Heading as="h4" size="xs" opacity={0.5}>
        Complexity
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 420 78'} onClick={() => breaks > 0 && setBreaks(breaks - 1)}>
          <ComplexityLeft />
        </SliderIconWrapper>

        <Slider aria-label="complexity" value={breaks} min={0} max={20} onChange={(val) => setBreaks(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 432 158'} onClick={() => breaks < 20 && setBreaks(breaks + 1)}>
          <ComplexityRight />
        </SliderIconWrapper>
      </HStack> */}

    </>
  );
};

export default Shape;
