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

import React, { memo } from 'react';
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import BalanceLeft from './Icons/BalanceLeft';
import BalanceRight from './Icons/BalanceRight';
import ComplexityRight from './Icons/ComplexityRight';
import ComplexityLeft from './Icons/ComplexityLeft';
import VelocityLeft from './Icons/VelocityLeft';
import VelocityRight from './Icons/VelocityRight';
import DistanceLeft from './Icons/DistanceLeft';
import DistanceRight from './Icons/DistanceRight';
import Edgy from './Icons/Edgy';
import Smooth from './Icons/Smooth';
import { useDesign } from '../../../../contexts/DesignContext';

const Shape: React.FunctionComponent = memo(() => {
  const { waveState: state, setWaveState: setState } = useDesign();
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
        <SliderIconWrapper
          viewBox={'0 0 456 456'}
          onClick={() =>
            state.balance > 0 &&
            setState((prev) => ({ ...prev, balance: prev.balance - 0.1 }))
          }
        >
          <BalanceLeft />
        </SliderIconWrapper>
        <Slider
          aria-label="balance"
          value={state.balance}
          min={0}
          max={1}
          step={0.01}
          onChange={(val) => setState((prev) => ({ ...prev, balance: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <SliderIconWrapper
          viewBox={'0 0 456 456'}
          onClick={() =>
            state.balance < 1 &&
            setState((prev) => ({ ...prev, balance: prev.balance + 0.1 }))
          }
        >
          <BalanceRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- VELOCITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Velocity
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 413 88'}
          onClick={() =>
            state.velocity > 0 &&
            setState((prev) => ({ ...prev, velocity: state.velocity - 0.1 }))
          }
        >
          <VelocityLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="velocity"
          value={state.velocity}
          step={0.1}
          min={0.1}
          max={1}
          onChange={(val) => setState((prev) => ({ ...prev, velocity: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 412 286'}
          onClick={() =>
            state.velocity < 1 &&
            setState((prev) => ({ ...prev, velocity: prev.velocity + 0.1 }))
          }
        >
          <VelocityRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- COMPLEXITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Complexity
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 420 78'}
          onClick={() =>
            state.breaks > 1 &&
            setState((prev) => ({ ...prev, breaks: prev.breaks - 1 }))
          }
        >
          <ComplexityLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="complexity"
          value={state.breaks}
          min={1}
          max={20}
          onChange={(val) => setState((prev) => ({ ...prev, breaks: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 432 158'}
          onClick={() =>
            state.breaks < 20 &&
            setState((prev) => ({ ...prev, breaks: prev.breaks + 1 }))
          }
        >
          <ComplexityRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- SMOOTH SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Smoothness
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 420 200'}
          onClick={() =>
            state.smooth > 0.05 &&
            setState((prev) => ({ ...prev, smooth: prev.smooth - 0.05 }))
          }
        >
          <Edgy />
        </SliderIconWrapper>

        <Slider
          aria-label="smootheness"
          value={state.smooth}
          step={0.01}
          min={0}
          max={0.2}
          onChange={(val) => setState((prev) => ({ ...prev, smooth: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 432 158'}
          onClick={() =>
            state.smooth < 0.25 &&
            setState((prev) => ({ ...prev, smooth: prev.smooth + 0.05 }))
          }
        >
          <Smooth />
        </SliderIconWrapper>
      </HStack>

      {/* ----- LAYERS INPUT ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Layers
      </Heading>
      <NumberInput
        defaultValue={state.stacks}
        min={0}
        max={100}
        onChange={(val) =>
          setState((prev) => ({ ...prev, stacks: Number(val) }))
        }
      >
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
        <SliderIconWrapper
          viewBox={'0 0 446 123'}
          onClick={() =>
            state.distance >= 25 &&
            setState((prev) => ({ ...prev, distance: prev.distance - 25 }))
          }
        >
          <DistanceLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="layer-distance"
          value={state.distance}
          min={0}
          max={150}
          onChange={(val) => setState((prev) => ({ ...prev, distance: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 445 303'}
          onClick={() =>
            state.distance <= 125 &&
            setState((prev) => ({ ...prev, distance: prev.distance + 25 }))
          }
        >
          <DistanceRight />
        </SliderIconWrapper>
      </HStack>
    </>
  );
});

export default Shape;
