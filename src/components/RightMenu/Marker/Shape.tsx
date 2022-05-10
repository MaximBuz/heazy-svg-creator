import {
  Heading,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tabs,
  TabList,
  Tab,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import SliderIconWrapper from '../SliderIconWrapper';

import { IMarkerShapeProps } from '../../../utils/types/markerProps';
import { IMarkerShapeSetterProps } from '../../../utils/types/markerSetterProps';
import ThickLeft from './Icons/ThickLeft';
import ThickRight from './Icons/ThickRight';
import HeightLeft from './Icons/HeightLeft';
import HeightRight from './Icons/HeightRight';
import ZigZagLeft from './Icons/ZigZagLeft';
import ZigZagRight from './Icons/ZigZagRight';
import PressureLeft from './Icons/PressureLeft';
import PressureRight from './Icons/PressureRight';
import CapsLeft from './Icons/CapsLeft';
import CapsCenter from './Icons/CapsCenter';
import CapsRight from './Icons/CapsRight';
import JoinsLeft from './Icons/JoinsLeft';
import JoinsCenter from './Icons/JoinsCenter';
import JoinsRight from './Icons/JoinsRight';

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
        <SliderIconWrapper
          viewBox={'0 0 297 297'}
          onClick={() => strokeWidth > 0 && setStrokeWidth(strokeWidth - 10)}
        >
          <ThickLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={strokeWidth}
          min={0}
          max={200}
          onChange={(val) => setStrokeWidth(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 374 374'}
          onClick={() => strokeWidth < 200 && setStrokeWidth(strokeWidth + 10)}
        >
          <ThickRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- MARKER HEIGHT SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Height
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 356 124'}
          onClick={() => markerHeight > 0 && setMarkerHeight(markerHeight - 5)}
        >
          <HeightLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={markerHeight}
          min={1}
          max={50}
          onChange={(val) => setMarkerHeight(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 344 396'}
          onClick={() => markerHeight < 50 && setMarkerHeight(markerHeight + 5)}
        >
          <HeightRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- ZICKZACKS SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Zigzags
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 238 270'}
          onClick={() => zickZacks > 0 && setzickZacks(zickZacks - 1)}
        >
          <ZigZagLeft />
        </SliderIconWrapper>

        <Slider aria-label="size" value={zickZacks} min={1} max={40} onChange={(val) => setzickZacks(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 426 266'}
          onClick={() => zickZacks < 40 && setzickZacks(zickZacks + 1)}
        >
          <ZigZagRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- Pressure SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Pressure
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 188 297'}
          onClick={() => pressure > -10 && setPressure(pressure - 1)}
        >
          <PressureRight />
        </SliderIconWrapper>

        <Slider aria-label="size" value={pressure} min={-10} max={10} onChange={(val) => setPressure(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 502 307'} onClick={() => pressure < 10 && setPressure(pressure + 1)}>
          <PressureLeft />
        </SliderIconWrapper>
      </HStack>

      {/* ----- LINECAP ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Line Caps
      </Heading>
      <Tabs
        onChange={(index) => setLineCap(index === 0 ? 'butt' : index === 1 ? 'round' : 'square')}
        defaultIndex={lineCap === 'butt' ? 0 : lineCap === 'round' ? 1 : 2}
        isFitted
        variant="unstyled"
      >
        <TabList>
          <Tab
            roundedTopLeft={10}
            roundedBottomLeft={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
            display="flex"
            flexDirection="column"
            gap="5px"
          >
            <Icon boxSize="7" viewBox="0 0 270 174" color="white">
              <CapsLeft />
            </Icon>
          </Tab>
          <Tab
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
            display="flex"
            flexDirection="column"
            gap="5px"
          >
            <Icon boxSize="7" viewBox="0 0 270 174" color="white">
              <CapsCenter />
            </Icon>
          </Tab>
          <Tab
            roundedTopRight={10}
            roundedBottomRight={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
            display="flex"
            flexDirection="column"
            gap="5px"
          >
            <Icon boxSize="7" viewBox="0 0 391 174" color="white">
              <CapsRight />
            </Icon>
          </Tab>
        </TabList>
      </Tabs>

      {/* ----- LINEJOIN ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Line Joins
      </Heading>
      <Tabs
        onChange={(index) => setLineJoin(index === 0 ? 'bevel' : index === 1 ? 'round' : 'miter')}
        defaultIndex={lineJoin === 'bevel' ? 0 : lineJoin === 'round' ? 1 : 2}
        isFitted
        variant="unstyled"
      >
        <TabList>
          <Tab
            roundedTopLeft={10}
            roundedBottomLeft={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
            display="flex"
            flexDirection="column"
            gap="5px"
          >
            <Icon boxSize="10" viewBox="0 0 348 278" color="white">
              <JoinsLeft />
            </Icon>
          </Tab>
          <Tab
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
            display="flex"
            flexDirection="column"
            gap="5px"
          >
            <Icon boxSize="10" viewBox="0 0 348 313" color="white">
              <JoinsCenter />
            </Icon>
          </Tab>
          <Tab
            roundedTopRight={10}
            roundedBottomRight={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
            display="flex"
            flexDirection="column"
            gap="5px"
          >
            <Icon boxSize="10" viewBox="0 0 348 353" color="white">
              <JoinsRight />
            </Icon>
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
};

export default Shape;
