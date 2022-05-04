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
      {/* -------------- SHAPE -------------- */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shape
      </Heading>

      <Heading as="h4" size="xs" opacity={0.5}>
        Balance
      </Heading>
      <HStack>
        <Icon
          onClick={() => balance > 0 && setBalance(balance - 0.1)}
          boxSize="9"
          viewBox="0 0 456 456"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            d="M223 441C126.52 441 29.5814 334.5 29.5814 149.5C121.446 210 159.987 133 229 133C292.455 133 311.556 216 428.286 193.5C428.286 345 312.282 441 223 441Z"
            fill="white"
          />
          <path
            d="M223 441C108.125 441 15 345.637 15 228C15 110.363 108.125 15 223 15C337.875 15 431 110.363 431 228C431 345.637 337.875 441 223 441ZM223 441C126.52 441 29.5814 334.5 29.5814 149.5C121.446 210 159.987 133 229 133C292.455 133 311.556 216 428.286 193.5C428.286 345 312.282 441 223 441Z"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
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
        <Icon
          onClick={() => balance < 1 && setBalance(balance + 0.1)}
          boxSize="9"
          viewBox="0 0 456 456"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            d="M228 441C326.799 441 416.47 333.233 440.547 242C320.547 347.96 291.172 286 220.5 286C155.52 286 147.21 393.576 40.9649 330C77.2726 378.5 136.572 441 228 441Z"
            fill="white"
          />
          <path
            d="M228 441C345.637 441 441 345.637 441 228C441 110.363 345.637 15 228 15C110.363 15 15 110.363 15 228C15 345.637 110.363 441 228 441ZM228 441C326.799 441 416.47 333.233 440.547 242C320.547 347.96 291.172 286 220.5 286C155.52 286 147.21 393.576 40.9649 330C77.2726 378.5 136.572 441 228 441Z"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
      </HStack>

      <Heading as="h4" size="xs" opacity={0.5}>
        Velocity
      </Heading>
      <HStack>
        <Icon
          onClick={() => velocity > 0 && setVelocity(velocity - 25)}
          boxSize="9"
          viewBox="0 0 413 88"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M397 52.8456C270.337 109.564 319.092 25.1275 217.324 15.6608C115.556 6.19414 99.9447 102.998 15 15.6608"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
        <Slider aria-label="velocity" value={velocity} min={0} max={250} onChange={(val) => setVelocity(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <Icon
          onClick={() => velocity < 250 && setVelocity(velocity + 25)}
          boxSize="9"
          viewBox="0 0 412 286"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M16 183.63C142 436.353 93.5 60.1255 194.735 17.9444C295.97 -24.2367 311.5 407.099 396 17.9444"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
      </HStack>

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
