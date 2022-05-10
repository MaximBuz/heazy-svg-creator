import { Heading, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import React from 'react';
import SliderIconWrapper from '../SliderIconWrapper';
import VelocityLeft from './Icons/VelocityLeft';
import VelocityRight from './Icons/VelocityRight';
import SizeLeft from './Icons/SizeLeft';
import SizeRight from './Icons/SizeRight';
import { IMarkerShapeProps } from '../../../utils/types/markerProps';
import { IMarkerShapeSetterProps } from '../../../utils/types/markerSetterProps';

const Shape: React.FunctionComponent<IMarkerShapeProps & IMarkerShapeSetterProps> = ({
  lineCap,
  lineJoin,
  strokeWidth,
  markerHeight,
  zickZacks,
  pressure,

  setLineCap,
  setLineJoin,
  setStrokeWidth,
  setMarkerHeight,
  setzickZacks,
  setPressure,
}) => {
  return (
    <>
      {/* ----- HEADLINE ------ */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shape
      </Heading>

      {/* ----- STROKE WIDTH SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Thickness
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 224 224'} onClick={() => strokeWidth > 0 && setStrokeWidth(strokeWidth - 10)}>
          <SizeLeft />
        </SliderIconWrapper>

        <Slider aria-label="size" value={strokeWidth} min={0} max={200} onChange={(val) => setStrokeWidth(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 469 469'} onClick={() => strokeWidth < 200 && setStrokeWidth(strokeWidth + 10)}>
          <SizeRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- MARKER HEIGHT SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Height
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 224 224'} onClick={() => markerHeight > 0 && setMarkerHeight(markerHeight - 5)}>
          <SizeLeft />
        </SliderIconWrapper>

        <Slider aria-label="size" value={markerHeight} min={1} max={50} onChange={(val) => setMarkerHeight(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 469 469'} onClick={() => markerHeight < 50 && setMarkerHeight(markerHeight + 5)}>
          <SizeRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- ZICKZACKS SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Zigzags
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 224 224'} onClick={() => zickZacks > 0 && setzickZacks(zickZacks - 1)}>
          <SizeLeft />
        </SliderIconWrapper>

        <Slider aria-label="size" value={zickZacks} min={1} max={40} onChange={(val) => setzickZacks(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 469 469'} onClick={() => zickZacks < 40 && setzickZacks(zickZacks + 1)}>
          <SizeRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- Pressure SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Pressure
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 224 224'} onClick={() => pressure > -10 && setPressure(pressure - 1)}>
          <SizeLeft />
        </SliderIconWrapper>

        <Slider aria-label="size" value={pressure} min={-10} max={10} onChange={(val) => setPressure(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 469 469'} onClick={() => pressure < 10 && setPressure(pressure + 1)}>
          <SizeRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- LINECAP ------ */}
      {/* ----- LINEJOIN ------ */}

    </>
  );
};

export default Shape;
