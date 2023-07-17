// Layout
import {
  Heading,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  Tab,
  TabList,
  TabProps,
  Tabs,
} from '@chakra-ui/react';

// Icons
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import LineWidthLeft from '../../Waves/OptionsMenu/Icons/LineWidthLeft';
import LineWidthRight from '../../Waves/OptionsMenu/Icons/LineWidthRight';
import { useDesign } from '../../../../contexts/DesignContext';
import { strokeStyles } from '../types/IsolineProps.types';

const Variants: React.FunctionComponent = () => {
  const { isolinesState: state, setIsolinesState: setState } = useDesign();

  const tabStyles: TabProps = {
    bgColor: '#262a33',
    _hover: { background: '#2e3643', cursor: 'pointer' },
    _selected: { background: '#363e4a' },
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };
  return (
    <>
      {/* ----- HEADLINE ------ */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Variants
      </Heading>

      {/* ------ LINE STROKE OPTIONS ------ */}

      <Heading as="h4" size="xs" opacity={0.5}>
        Line width
      </Heading>
      <HStack>
        <SliderIconWrapper
          viewBox="0 0 394 366"
          onClick={() =>
            state.strokeWidth > 0 &&
            setState((prev) => ({ ...prev, strokeWidth: prev.strokeWidth - 1 }))
          }
        >
          <LineWidthLeft />
        </SliderIconWrapper>

        <Slider
          aria-label="line-width"
          value={state.strokeWidth}
          min={0}
          max={20}
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
      <HStack justifyContent="space-between">
        <Heading as="h4" size="xs" opacity={0.5}>
          Shrink lines progressively
        </Heading>
        <Switch
          isChecked={state.strokeShrink}
          size="lg"
          onChange={() =>
            setState((prev) => ({ ...prev, strokeShrink: !state.strokeShrink }))
          }
        />
      </HStack>

      <Heading as="h4" size="xs" opacity={0.5}>
        Stroke Style
      </Heading>
      <Tabs
        onChange={(index) =>
          setState((prev) => ({
            ...prev,
            strokeStyle: (index + 1) as strokeStyles,
          }))
        }
        defaultIndex={4 - 1}
        isFitted
        variant="unstyled"
      >
        <TabList>
          <Tab roundedTopLeft={10} roundedBottomLeft={10} {...tabStyles}>
            1
          </Tab>
          <Tab {...tabStyles}>2</Tab>
          <Tab {...tabStyles}>3</Tab>
          <Tab roundedTopRight={10} roundedBottomRight={10} {...tabStyles}>
            4
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
};

export default Variants;
