// Layout
import {
  Heading,
  HStack,
  Icon,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react';

// Icons
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import LineWidthLeft from '../../Waves/OptionsMenu/Icons/LineWidthLeft';
import LineWidthRight from '../../Waves/OptionsMenu/Icons/LineWidthRight';
import Solid from './Icons/Solid';
import Outline from './Icons/Outline';
import { useDesign } from '../../../../contexts/DesignContext';

const Variants: React.FunctionComponent = () => {
  const { bubbleState: state, setBubbleState: setState } = useDesign();
  return (
    <>
      <Heading as="h3" size="xs" textTransform="uppercase">
        Variants
      </Heading>

      {/* ------ SOLID vs. OUTLINE ------ */}
      <Tabs
        onChange={(index) =>
          setState((prev) => ({ ...prev, solid: index === 0 ? true : false }))
        }
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
            <Icon boxSize="5" viewBox="0 0 465 465" color="white">
              <Solid />
            </Icon>
            Solid
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
            <Icon boxSize="5" viewBox="0 0 465 465" color="white">
              <Outline />
            </Icon>
            Outline
          </Tab>
        </TabList>
      </Tabs>

      {/* ------ LINE STROKE OPTIONS ------ */}
      {!state.solid && (
        <>
          <Heading as="h4" size="xs" opacity={0.5}>
            Line width
          </Heading>
          <HStack>
            <SliderIconWrapper
              viewBox="0 0 394 366"
              onClick={() =>
                state.strokeWidth > 0 &&
                setState((prev) => ({
                  ...prev,
                  strokeWidth: prev.strokeWidth - 1,
                }))
              }
            >
              <LineWidthLeft />
            </SliderIconWrapper>

            <Slider
              aria-label="balance"
              value={state.strokeWidth}
              min={0}
              max={50}
              step={0.5}
              onChange={(val) =>
                setState((prev) => ({ ...prev, strokeWidth: val }))
              }
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <SliderIconWrapper
              viewBox="0 0 433 325"
              onClick={() =>
                state.strokeWidth < 50 &&
                setState((prev) => ({
                  ...prev,
                  strokeWidth: state.strokeWidth + 1,
                }))
              }
            >
              <LineWidthRight />
            </SliderIconWrapper>
          </HStack>
        </>
      )}
    </>
  );
};

export default Variants;
