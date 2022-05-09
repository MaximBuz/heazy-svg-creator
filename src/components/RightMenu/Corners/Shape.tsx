import {
  Heading,
  HStack,
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
import BalanceLeft from './Icons/BalanceLeft';
import BalanceRight from './Icons/BalanceRight';
import ComplexityRight from './Icons/ComplexityRight';
import ComplexityLeft from './Icons/ComplexityLeft';
import VelocityLeft from './Icons/VelocityLeft';
import VelocityRight from './Icons/VelocityRight';
import DistanceLeft from './Icons/DistanceLeft';
import DistanceRight from './Icons/DistanceRight';

export interface IShapeProps {
  balance: number;
  velocity: number;
  breaks: number;
  stacks: number;
  distance: number;
  setBalance: Dispatch<SetStateAction<number>>;
  setVelocity: Dispatch<SetStateAction<number>>;
  setBreaks: Dispatch<SetStateAction<number>>;
  setStacks: Dispatch<SetStateAction<number>>;
  setDistance: Dispatch<SetStateAction<number>>;
}

const Shape: React.FunctionComponent<IShapeProps> = ({
  balance,
  setBalance,
  velocity,
  setVelocity,
  breaks,
  setBreaks,
  stacks,
  setStacks,
  distance,
  setDistance,
}) => {
  return (
    <>
      {/* ----- HEADLINE ------ */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shape
      </Heading>

      {/* ----- BALANCE SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Balance
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 456 456'} onClick={() => balance > 0 && setBalance(balance - 0.1)}>
          <BalanceLeft />
        </SliderIconWrapper>
        <Slider
          aria-label="balance"
          value={balance}
          min={0}
          max={1}
          step={0.01}
          onChange={(val) => setBalance(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <SliderIconWrapper viewBox={'0 0 456 456'} onClick={() => balance < 1 && setBalance(balance + 0.1)}>
          <BalanceRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- VELOCITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Velocity
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 413 88'} onClick={() => velocity > 0 && setVelocity(velocity - 25)}>
          <VelocityLeft />
        </SliderIconWrapper>

        <Slider aria-label="velocity" value={velocity} min={0} max={250} onChange={(val) => setVelocity(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 412 286'}
          onClick={() => velocity < 250 && setVelocity(velocity + 25)}
        >
          <VelocityRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- COMPLEXITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
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
      </HStack>

      {/* ----- LAYERS INPUT ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Layers
      </Heading>
      <NumberInput defaultValue={stacks} min={0} max={100} onChange={(val) => setStacks(Number(val))}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      {/* ----- DISTANCE SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Layer Distance
      </Heading>
      <HStack>
        <SliderIconWrapper viewBox={'0 0 446 123'} onClick={() => distance > 0 && setDistance(distance - 1)}>
          <DistanceLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="layer-distance"
          value={distance}
          min={0}
          max={10}
          onChange={(val) => setDistance(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 445 303'} onClick={() => distance < 10 && setDistance(distance + 1)}>
          <DistanceRight />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default Shape;
