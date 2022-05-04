import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Divider,
  Heading,
  TabList,
  Tabs,
  Tab,
  HStack,
  PopoverTrigger as OrigPopoverTrigger,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  InputGroup,
  InputLeftElement,
  Input,
  Circle,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import ColorPicker from 'react-color';

const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger;

export interface IWaveOptionsProps {
  setSolid: Dispatch<SetStateAction<number>>;
  setSmooth: Dispatch<SetStateAction<number>>;
  setDirection: Dispatch<SetStateAction<number>>;
  setBgColor: Dispatch<SetStateAction<string>>;
  bgColor: string;
  setStartColor: Dispatch<SetStateAction<string>>;
  startColor: string;
  setStopColor: Dispatch<SetStateAction<string>>;
  stopColor: string;

  shadowX: number;
  setShadowX: Dispatch<SetStateAction<number>>;
  shadowY: number;
  setShadowY: Dispatch<SetStateAction<number>>;
  shadowSD: number;
  setShadowSD: Dispatch<SetStateAction<number>>;
  shadowOpacity: number;
  setShadowOpacity: Dispatch<SetStateAction<number>>;
  shadowColor: string;
  setShadowColor: Dispatch<SetStateAction<string>>;

  balance: number;
  velocity: number;
  breaks: number;
  stacks: number;
  distance: number;
  setBalance: Dispatch<SetStateAction<number>>;
  setVelocity: Dispatch<SetStateAction<number>>;
  setBreaks: Dispatch<SetStateAction<number>>;
  setStacks: Dispatch<SetStateAction<number>>;
  setDistance: Dispatch<SetStateAction<number>>;
}

const WaveOptions: React.FunctionComponent<IWaveOptionsProps> = ({
  setSolid,
  setSmooth,
  setDirection,
  setBgColor,
  bgColor,
  setStartColor,
  setStopColor,
  startColor,
  stopColor,
  shadowX,
  setShadowX,
  shadowY,
  setShadowY,
  shadowSD,
  setShadowSD,
  shadowOpacity,
  setShadowOpacity,
  shadowColor,
  setShadowColor,
  setBalance,
  setVelocity,
  setBreaks,
  setStacks,
  setDistance,
  balance,
  velocity,
  breaks,
  stacks,
  distance,
}) => {
  return (
    <>
      {/* -------------- VARIANTS -------------- */}
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
          >
            Solid
          </Tab>
          <Tab
            roundedTopRight={10}
            roundedBottomRight={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            Outline
          </Tab>
        </TabList>
      </Tabs>

      {/*  SMOOTH vs. PEAK  */}
      <Tabs onChange={(index) => setSmooth(index)} defaultIndex={0} isFitted variant="unstyled">
        <TabList>
          <Tab
            roundedTopLeft={10}
            roundedBottomLeft={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            Edgy
          </Tab>
          <Tab
            roundedTopRight={10}
            roundedBottomRight={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            Smooth
          </Tab>
        </TabList>
      </Tabs>
      <Divider></Divider>

      {/* -------------- SHAPE -------------- */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shape
      </Heading>

      <Heading as="h4" size="xs" opacity={0.5}>
        Balance
      </Heading>
      <Slider
        aria-label="balance"
        defaultValue={balance}
        min={0}
        max={1}
        step={0.01}
        onChange={(val) => setBalance(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Heading as="h4" size="xs" opacity={0.5}>
        Velocity
      </Heading>
      <Slider
        aria-label="velocity"
        defaultValue={velocity}
        min={0}
        max={250}
        onChange={(val) => setVelocity(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Heading as="h4" size="xs" opacity={0.5}>
        Complexity
      </Heading>
      <Slider
        aria-label="complexity"
        defaultValue={breaks}
        min={0}
        max={20}
        onChange={(val) => setBreaks(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Heading as="h4" size="xs" opacity={0.5}>
        Layers
      </Heading>
      <NumberInput defaultValue={stacks} min={0} max={100} onChange={(val) => setStacks(Number(val))}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Heading as="h4" size="xs" opacity={0.5}>
        Layer Distance
      </Heading>
      <Slider
        aria-label="layer-distance"
        defaultValue={distance}
        min={0}
        max={10}
        onChange={(val) => setDistance(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Divider></Divider>
      {/* -------------- DIRECTION -------------- */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Direction
      </Heading>

      <Tabs onChange={(index) => setDirection(index)} defaultIndex={0} isFitted variant="unstyled">
        <TabList>
          <Tab
            roundedTopLeft={10}
            roundedBottomLeft={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            <ChevronDownIcon boxSize={8} />
          </Tab>
          <Tab
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            <ChevronUpIcon boxSize={8} />
          </Tab>
          <Tab
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            <ChevronLeftIcon boxSize={8} />
          </Tab>
          <Tab
            roundedTopRight={10}
            roundedBottomRight={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            <ChevronRightIcon boxSize={8} />
          </Tab>
        </TabList>
      </Tabs>

      <Divider></Divider>

      {/* -------------- COLOR -------------- */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Color
      </Heading>

      {/* Backgound Color */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Background
      </Heading>
      <HStack>
        <Popover >
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={bgColor}
                boxShadow="0 0 0 1px #52555A"
                as="button"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement opacity={0.7} pointerEvents="none" children="#" />
              <Input value={bgColor.replace('#', '')} onChange={(e) => setBgColor(`#${e.target.value}`)} />
            </InputGroup>
          </HStack>
          <PopoverContent rootProps={{style: {right: 0}}} width="fit-content">
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={bgColor}
                onChange={(col) => setBgColor(col.hex)}
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      {/* Wave Start Color */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Start color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={startColor}
                boxShadow="0 0 0 1px #52555A"
                as="button"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement opacity={0.7} pointerEvents="none" children="#" />
              <Input
                value={startColor.replace('#', '')}
                onChange={(e) => setStartColor(`#${e.target.value}`)}
              />
            </InputGroup>
          </HStack>
          <PopoverContent rootProps={{style: {right: 0}}} width="fit-content">
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={startColor}
                onChange={(col) => setStartColor(col.hex)}
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      {/* Wave Start Color */}
      <Heading as="h4" size="xs" opacity={0.5}>
        End color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={stopColor}
                boxShadow="0 0 0 1px #52555A"
                as="button"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement opacity={0.7} pointerEvents="none" children="#" />
              <Input
                value={stopColor.replace('#', '')}
                onChange={(e) => setStopColor(`#${e.target.value}`)}
              />
            </InputGroup>
          </HStack>
          <PopoverContent rootProps={{style: {right: 0}}} width="fit-content">
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={stopColor}
                onChange={(col) => setStopColor(col.hex)}
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      <Divider></Divider>

      {/* -------------- SHADOW -------------- */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shadow / Blur
      </Heading>

      <Heading as="h4" size="xs" opacity={0.5}>
        Offset X
      </Heading>
      <Slider
        aria-label="shadow-x-offset"
        defaultValue={shadowX}
        min={-50}
        max={50}
        onChange={(val) => setShadowX(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Heading as="h4" size="xs" opacity={0.5}>
        Offset Y
      </Heading>
      <Slider
        aria-label="shadow-y-offset"
        defaultValue={shadowY}
        min={-10}
        max={50}
        onChange={(val) => setShadowY(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Heading as="h4" size="xs" opacity={0.5}>
        Radius
      </Heading>
      <Slider
        aria-label="shadow-blur-radius"
        defaultValue={shadowSD}
        min={0}
        max={25}
        onChange={(val) => setShadowSD(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Heading as="h4" size="xs" opacity={0.5}>
        Opacity
      </Heading>
      <Slider
        aria-label="shadow-opacity"
        defaultValue={shadowOpacity}
        min={0}
        max={1}
        step={0.01}
        onChange={(val) => setShadowOpacity(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Heading as="h4" size="xs" opacity={0.5}>
        Color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={shadowColor}
                boxShadow="0 0 0 1px #52555A"
                as="button"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement opacity={0.7} pointerEvents="none" children="#" />
              <Input
                value={shadowColor.replace('#', '')}
                onChange={(e) => setShadowColor(`#${e.target.value}`)}
              />
            </InputGroup>
          </HStack>
          <PopoverContent rootProps={{style: {right: 0}}} width="fit-content">
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={shadowColor}
                onChange={(col) => setShadowColor(col.hex)}
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
    </>
  );
};

export default WaveOptions;
