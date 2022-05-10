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
} from '@chakra-ui/react';
import React from 'react';
import SliderIconWrapper from '../SliderIconWrapper';
import SizeLeft from './Icons/SizeLeft';
import SizeRight from './Icons/SizeRight';
import { IMarkerPositionProps } from '../../../utils/types/markerProps';
import { IMarkerPositionSetterProps } from '../../../utils/types/markerSetterProps';

const Position: React.FunctionComponent<IMarkerPositionProps & IMarkerPositionSetterProps> = ({
  padding,
  mirror,
  yPosition,

  setPadding,
  setMirror,
  setYPosition,
}) => {
  return (
    <>
      {/* ----- HEADLINE ------ */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Position
      </Heading>

      {/* ------ MIRROR ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Mirror
      </Heading>
      <Tabs
        onChange={(index) => setMirror(index === 0 ? false : true)}
        defaultIndex={0}
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
            {/* <Icon boxSize="5" viewBox="0 0 465 465" color="white">
              <Solid />
            </Icon> */}
            To Top
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
            {/* <Icon boxSize="5" viewBox="0 0 465 465" color="white">
              <Outline />
            </Icon> */}
            To Bottom
          </Tab>
        </TabList>
      </Tabs>

      {/* ----- Y POSITION SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Y Position
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 224 224'}
          onClick={() => yPosition > -200 && setYPosition(yPosition - 100)}
        >
          <SizeLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={yPosition}
          min={-200}
          max={1500}
          onChange={(val) => setYPosition(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 469 469'}
          onClick={() => yPosition < 1500 && setYPosition(yPosition + 100)}
        >
          <SizeRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- PADDING SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Padding
      </Heading>

      <HStack>
        <SliderIconWrapper viewBox={'0 0 224 224'} onClick={() => padding > -200 && setPadding(padding - 10)}>
          <SizeLeft />
        </SliderIconWrapper>

        <Slider aria-label="size" value={padding} min={-200} max={200} onChange={(val) => setPadding(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper viewBox={'0 0 469 469'} onClick={() => padding < 200 && setPadding(padding + 10)}>
          <SizeRight />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default Position;
