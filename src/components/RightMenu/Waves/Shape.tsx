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
import BalanceLeft from './Icons/BalanceLeft';
import BalanceRight from './Icons/BalanceRight';
import VelocityLeft from './Icons/VelocityLeft';
import VelocityRight from './Icons/VelocityRight';

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

        <SliderIconWrapper viewBox={"0 0 412 286"} onClick={() => velocity < 250 && setVelocity(velocity + 25)}>
          <VelocityRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- COMPLEXITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Complexity
      </Heading>
      <HStack>
        <Icon
          onClick={() => breaks > 0 && setBreaks(breaks - 1)}
          boxSize="9"
          viewBox="0 0 420 78"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M16 34.8824C200 124 203.5 -37.5 404 34.8824"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
        <Slider aria-label="complexity" value={breaks} min={0} max={20} onChange={(val) => setBreaks(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Icon
          onClick={() => breaks < 20 && setBreaks(breaks + 1)}
          boxSize="9"
          viewBox="0 0 432 158"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M414 15.5C421.5 43.1667 417 142.5 367 142.5C317 142.5 342.5 50 290 50C237.5 50 252 142.5 202 142.5C157 142.5 170 94 132 94C86.0001 94 107 142.5 61.0001 142.5C28 142.5 16 121 16 121"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
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
        <Icon
          onClick={() => distance > 0 && setDistance(distance - 1)}
          boxSize="9"
          viewBox="0 0 446 123"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            d="M16 34.257C200 123.375 203.5 -38.1254 404 34.257"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
          <path
            d="M42 90.257C226 179.375 229.5 17.8746 430 90.257"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
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
        <Icon
          onClick={() => distance < 10 && setDistance(distance + 1)}
          boxSize="9"
          viewBox="0 0 445 303"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            d="M15 45.8134C199 188.412 202.5 -70.0069 403 45.8134"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
          <path
            d="M41 241.457C225 391.661 228.5 119.459 429 241.457"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
      </HStack>
    </>
  );
};

export default Shape;
