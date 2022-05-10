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
        Size
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

    </>
  );
};

export default Shape;
