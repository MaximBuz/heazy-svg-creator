import {
  Heading,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import React from 'react';
import { useDesign } from '../../../../contexts/DesignContext';
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import * as icons from './icons';

const CenterPosition: React.FunctionComponent = () => {
  const { isolinesState: state, setIsolinesState: setState } = useDesign();
  return (
    <>
      {/* ----- HEADLINE ------ */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Inner Offset
      </Heading>

      {/* ----- Y CenterPosition SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Y-offset
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.innerOffsetY > 0 &&
            setState((prev) => ({
              ...prev,
              innerOffsetY: prev.innerOffsetY - 0.1,
            }))
          }
        >
          <icons.YPosLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="inner-offset-y"
          value={state.innerOffsetY}
          min={0}
          max={2}
          step={0.1}
          onChange={(val) =>
            setState((prev) => ({ ...prev, innerOffsetY: val }))
          }
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.innerOffsetY < 2 &&
            setState((prev) => ({
              ...prev,
              innerOffsetY: prev.innerOffsetY + 0.1,
            }))
          }
        >
          <icons.YPosRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- X CenterPosition SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        X-offset
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.innerOffsetX > 0 &&
            setState((prev) => ({
              ...prev,
              innerOffsetX: prev.innerOffsetX - 0.1,
            }))
          }
        >
          <icons.XPosLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="inner-offset-x"
          value={state.innerOffsetX}
          min={0}
          max={2}
          step={0.1}
          onChange={(val) =>
            setState((prev) => ({ ...prev, innerOffsetX: val }))
          }
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.innerOffsetX < 2 &&
            setState((prev) => ({
              ...prev,
              innerOffsetX: prev.innerOffsetX + 0.1,
            }))
          }
        >
          <icons.XPosRight />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default CenterPosition;
