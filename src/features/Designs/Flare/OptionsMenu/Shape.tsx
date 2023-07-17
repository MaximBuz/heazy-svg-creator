import {
  Heading,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import React from 'react';
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import { useDesign } from '../../../../contexts/DesignContext';
import * as icons from './icons';

const Shape: React.FunctionComponent = () => {
  const { flareState: state, setFlareState: setState } = useDesign();
  return (
    <>
      {/* ----- HEADLINE ------ */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shape
      </Heading>

      {/* ----- LENS RADIUS SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Lens Radius
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.lensRadius > 50 &&
            setState((prev) => ({ ...prev, lensRadius: prev.lensRadius - 5 }))
          }
        >
          <icons.lensRadiusLow />
        </SliderIconWrapper>

        <Slider
          aria-label="lensRadius"
          value={state.lensRadius}
          min={50}
          max={100}
          step={1}
          onChange={(val) => setState((prev) => ({ ...prev, lensRadius: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.lensRadius < 100 &&
            setState((prev) => ({ ...prev, lensRadius: prev.lensRadius + 5 }))
          }
        >
          <icons.lensRadiusHigh />
        </SliderIconWrapper>
      </HStack>

      {/* ----- LENS SPILL SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Lens Spill
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.lensSpill > 1 &&
            setState((prev) => ({ ...prev, lensSpill: prev.lensSpill - 0.5 }))
          }
        >
          <icons.lensSpillLow />
        </SliderIconWrapper>

        <Slider
          aria-label="lensSpill"
          value={state.lensSpill}
          min={1}
          max={4}
          step={0.1}
          onChange={(val) => setState((prev) => ({ ...prev, lensSpill: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.lensSpill < 5 &&
            setState((prev) => ({ ...prev, lensSpill: prev.lensSpill + 0.5 }))
          }
        >
          <icons.lensSpillHigh />
        </SliderIconWrapper>
      </HStack>

      {/* ----- IRIS WIDTH SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Iris Width
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.irisWidth > 1 &&
            setState((prev) => ({ ...prev, irisWidth: prev.irisWidth - 1 }))
          }
        >
          <icons.irisWidthLow />
        </SliderIconWrapper>

        <Slider
          aria-label="irisWidth"
          value={state.irisWidth}
          min={1}
          max={15}
          step={0.5}
          onChange={(val) => setState((prev) => ({ ...prev, irisWidth: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.irisWidth < 15 &&
            setState((prev) => ({ ...prev, irisWidth: prev.irisWidth + 1 }))
          }
        >
          <icons.irisWidthHigh />
        </SliderIconWrapper>
      </HStack>

      {/* ----- IRIS INTENSITY SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Iris Intensity
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.irisIntensity > 0.1 &&
            setState((prev) => ({
              ...prev,
              irisIntensity: prev.irisIntensity - 0.1,
            }))
          }
        >
          <icons.intensityLow />
        </SliderIconWrapper>

        <Slider
          aria-label="irisIntensity"
          value={state.irisIntensity}
          min={0.1}
          max={2}
          step={0.1}
          onChange={(val) =>
            setState((prev) => ({ ...prev, irisIntensity: val }))
          }
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 514 545'}
          onClick={() =>
            state.irisIntensity < 2 &&
            setState((prev) => ({
              ...prev,
              irisIntensity: prev.irisIntensity + 0.1,
            }))
          }
        >
          <icons.intensityHigh />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default Shape;
