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
import { Dispatch, SetStateAction } from 'react';

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

      {/*  SOLID vs. OUTLINE  */}
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
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M193.735 15C125.145 15 127.148 70.9385 15 38.5385V177H395V15C268.333 69 268.333 15 193.735 15Z"
                fill="white"
                stroke="white"
                stroke-width="30"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
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
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M16 60.9324C128.148 124.157 126.145 15 194.735 15C269.333 15 269.333 120.374 396 15"
                stroke="white"
                stroke-width="30"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
            </Icon>
            Outline
          </Tab>
        </TabList>
      </Tabs>
      {/*  SMOOTH vs. PEAK  */}
      <Tabs onChange={(index) => setSmooth(index)} defaultIndex={1} isFitted variant="unstyled">
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
            <Icon boxSize="5" viewBox="0 0 452 189" color="white">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M15 121.835L103.512 28.0381L144.364 174L269.189 16L364.509 127.854C386.07 90.5693 436 16 436 16"
                stroke="white"
                stroke-width="30"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Icon>
            Edgy
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
            <Icon boxSize="5" viewBox="0 0 412 219" color="white">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M16 139.767C142 325.5 93.5 49 194.735 18C295.97 -13 311.5 304 396 18"
                stroke="white"
                stroke-width="30"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
            </Icon>
            Smooth
          </Tab>
        </TabList>
      </Tabs>
      {solid === 1 && (
        <>
          <Heading as="h4" size="xs" opacity={0.5}>
            Line width
          </Heading>
          <HStack>
            <Icon
              onClick={() => strokeWidth > 0 && setStrokeWidth(strokeWidth - 1)}
              boxSize="9"
              viewBox="0 0 394 366"
              rounded="full"
              p="2"
              bg="#262e3a"
              transition="0.3s"
              _hover={{ background: '#373d48', cursor: 'pointer' }}
              fill="none"
            >
              <path
                d="M3 35.4568C187 185.661 190.5 -86.5406 391 35.4568"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
              <path
                d="M3 35.4568C187 185.661 190.5 -86.5406 391 35.4568"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
              <path
                d="M3 136.457C187 286.661 190.5 14.4594 391 136.457"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
              <path
                d="M3 215.457C187 365.661 190.5 93.4594 391 215.457"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
              <path
                d="M3 215.457C187 365.661 190.5 93.4594 391 215.457"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
              <path
                d="M3 316.457C187 466.661 190.5 194.459 391 316.457"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
            </Icon>
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
            <Icon
              onClick={() => strokeWidth < 50 && setStrokeWidth(strokeWidth + 1)}
              boxSize="9"
              viewBox="0 0 433 325"
              rounded="full"
              p="2"
              bg="#262e3a"
              transition="0.3s"
              _hover={{ background: '#373d48', cursor: 'pointer' }}
              fill="none"
            >
              <path
                d="M22 155.457C206 305.661 209.5 33.4594 410 155.457"
                stroke="white"
                stroke-width="44"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
              <path
                d="M22 155.457C206 305.661 209.5 33.4594 410 155.457"
                stroke="white"
                stroke-width="44"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
              <path
                d="M22 54.4568C206 204.661 209.5 -67.5406 410 54.4568"
                stroke="white"
                stroke-width="44"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
              <path
                d="M22 256.457C206 406.661 209.5 134.459 410 256.457"
                stroke="white"
                stroke-width="44"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1"
              />
            </Icon>
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
