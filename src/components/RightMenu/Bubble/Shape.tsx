import { Heading, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import SliderIconWrapper from '../SliderIconWrapper';
import VelocityLeft from './Icons/VelocityLeft';
import VelocityRight from './Icons/VelocityRight';
import SizeLeft from './Icons/SizeLeft';
import SizeRight from './Icons/SizeRight';

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
        <SliderIconWrapper viewBox={'0 0 224 224'} onClick={() => size > 0 && setSize(size - 10)}>
          <SizeLeft />
        </SliderIconWrapper>

        <Slider aria-label="size" value={size} min={0} max={300} onChange={(val) => setSize(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 469 469'} onClick={() => size < 300 && setSize(size + 10)}>
          <SizeRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- VELOCITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Velocity
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 465 465'} onClick={() => velocity > 0 && setVelocity(velocity - 10)}>
          <VelocityLeft />
        </SliderIconWrapper>

        <Slider aria-label="velocity" value={velocity} min={0} max={100} onChange={(val) => setVelocity(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 444 456'}
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
