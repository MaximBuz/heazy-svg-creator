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
import { useDesign } from '../../../../contexts/DesignContext';
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import PaddingLeft from './Icons/PaddingLeft';
import PaddingRight from './Icons/PaddingRight';
import YPosLeft from './Icons/YPosLeft';
import YPosRight from './Icons/YPosRight';

const Position: React.FunctionComponent = () => {
  const { markerState: state, setMarkerState: setState } = useDesign();
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
        onChange={(index) =>
          setState((prev) => ({ ...prev, mirror: index === 0 ? false : true }))
        }
        defaultIndex={state.mirror === false ? 0 : 1}
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
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.yPosition > -200 &&
            setState((prev) => ({ ...prev, yPosition: prev.yPosition - 100 }))
          }
        >
          <YPosLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={state.yPosition}
          min={-200}
          max={1500}
          onChange={(val) => setState((prev) => ({ ...prev, yPosition: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.yPosition < 1500 &&
            setState((prev) => ({ ...prev, yPosition: prev.yPosition + 100 }))
          }
        >
          <YPosRight />
        </SliderIconWrapper>
      </HStack>

      {/* ----- PADDING SLIDER ------ */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Padding
      </Heading>

      <HStack>
        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.padding > -200 &&
            setState((prev) => ({ ...prev, padding: prev.padding - 10 }))
          }
        >
          <PaddingRight />
        </SliderIconWrapper>

        <Slider
          aria-label="size"
          value={state.padding}
          min={-200}
          max={200}
          onChange={(val) => setState((prev) => ({ ...prev, padding: val }))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SliderIconWrapper
          viewBox={'0 0 24 24'}
          onClick={() =>
            state.padding < 200 &&
            setState((prev) => ({ ...prev, padding: prev.padding + 10 }))
          }
        >
          <PaddingLeft />
        </SliderIconWrapper>
      </HStack>
    </>
  );
};

export default Position;
