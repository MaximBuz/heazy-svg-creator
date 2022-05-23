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
import React from 'react';
import SliderIconWrapper from '../../OptionsMenu/SliderIconWrapper';
import BalanceLeft from './Icons/BalanceLeft';
import BalanceRight from './Icons/BalanceRight';
import ComplexityRight from './Icons/ComplexityRight';
import ComplexityLeft from './Icons/ComplexityLeft';
import VelocityLeft from './Icons/VelocityLeft';
import VelocityRight from './Icons/VelocityRight';
import DistanceLeft from './Icons/DistanceLeft';
import DistanceRight from './Icons/DistanceRight';
import { ICornerShapeProps } from '../Types/cornerProps';
import { ICornerShapeSetterProps } from '../Types/cornerSetterProps';
import Smooth from './Icons/Smooth';
import Edgy from './Icons/Edgy';


const Shape: React.FunctionComponent<ICornerShapeProps & ICornerShapeSetterProps> = ({
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
  smooth,
  setSmooth
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
        <SliderIconWrapper viewBox={'0 0 413 88'} onClick={() => velocity > 0 && setVelocity(velocity - 0.1)}>
          <VelocityLeft />
        </SliderIconWrapper>

        <Slider aria-label="velocity" value={velocity} min={0} max={1} step={0.1} onChange={(val) => setVelocity(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 412 286'}
          onClick={() => velocity < 1 && setVelocity(velocity + 0.1)}
        >
          <VelocityRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- COMPLEXITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Complexity
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 420 78'} onClick={() => breaks > 2 && setBreaks(breaks - 1)}>
          <ComplexityLeft />
        </SliderIconWrapper>

        <Slider aria-label="complexity" value={breaks} min={2} max={10} onChange={(val) => setBreaks(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 432 158'} onClick={() => breaks < 10 && setBreaks(breaks + 1)}>
          <ComplexityRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- SMOOTH SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Smoothness
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 420 200'} onClick={() => smooth > 0.05 && setSmooth(smooth - 0.05)}>
          <Edgy />
        </SliderIconWrapper>

        <Slider aria-label="complexity" value={smooth} step={0.01} min={0} max={0.2} onChange={(val) => setSmooth(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 432 158'} onClick={() => smooth < 0.25 && setSmooth(smooth + 0.05)}>
          <Smooth />
        </SliderIconWrapper>
      </HStack>

      {/* ----- LAYERS INPUT ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Layers
      </Heading>
      <NumberInput defaultValue={stacks} min={0} max={5} onChange={(val) => setStacks(Number(val))}>
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
        <SliderIconWrapper viewBox={'0 0 446 123'} onClick={() => distance >= 25 && setDistance(distance - 25)}>
          <DistanceLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="layer-distance"
          value={distance}
          min={0}
          max={150}
          onChange={(val) => setDistance(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 445 303'} onClick={() => distance <= 125 && setDistance(distance + 25)}>
          <DistanceRight />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default Shape;
