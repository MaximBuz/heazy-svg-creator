// React
import { Dispatch, SetStateAction } from 'react';

// Layout
import {
  Heading,
  HStack,
  Icon,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react';


// Icons
import SliderIconWrapper from '../../../OptionsMenu/SliderIconWrapper';
import LineWidthLeft from './Icons/LineWidthLeft';
import LineWidthRight from './Icons/LineWidthRight';
import Solid from './Icons/Solid';
import Outline from './Icons/Outline';

type Props = {
  setSolid: Dispatch<SetStateAction<number>>;
  solid: number;
  setStrokeShrink: Dispatch<SetStateAction<boolean>>;
  strokeShrink: boolean;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  strokeWidth: number;
  setSmooth: Dispatch<SetStateAction<number>>;
};

export default function Variants({
  setSolid,
  solid,
  setStrokeShrink,
  strokeShrink,
  setStrokeWidth,
  strokeWidth,
  setSmooth,
}: Props) {
  return (
    <>
      <Heading as="h3" size="xs" textTransform="uppercase">
        Variants
      </Heading>

      {/* ------ SOLID vs. OUTLINE ------ */}
      <Tabs onChange={(index) => setSolid(index)} defaultIndex={0} isFitted variant="unstyled">
        <TabList>
          <Tab
            roundedTopLeft={10}
            roundedBottomLeft={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
            display="flex"
            flexDirection="column"
          >
            <Icon boxSize="5" viewBox="0 0 410 192" color="white">
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
          >
            <Icon boxSize="5" viewBox="0 0 411 96" color="white">
              <Outline />
            </Icon>
            Outline
          </Tab>
        </TabList>
      </Tabs>

      {/* ------ LINE STROKE OPTIONS ------ */}
      {solid === 1 && (
        <>
          <Heading as="h4" size="xs" opacity={0.5}>
            Line width
          </Heading>
          <HStack>
            <SliderIconWrapper
              viewBox="0 0 394 366"
              onClick={() => strokeWidth > 0 && setStrokeWidth(strokeWidth - 1)}
            >
              <LineWidthLeft />
            </SliderIconWrapper>

            <Slider
              aria-label="balance"
              value={strokeWidth}
              min={0}
              max={50}
              step={0.5}
              onChange={(val) => setStrokeWidth(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <SliderIconWrapper
              viewBox="0 0 433 325"
              onClick={() => strokeWidth < 50 && setStrokeWidth(strokeWidth + 1)}
            >
              <LineWidthRight />
            </SliderIconWrapper>
          </HStack>
          <HStack justifyContent="space-between">
            <Heading as="h4" size="xs" opacity={0.5}>
              Shrink lines progressively
            </Heading>
            <Switch size="lg" onChange={() => setStrokeShrink(!strokeShrink)} />
          </HStack>
        </>
      )}
    </>
  );
}
