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
  Icon,
  Switch,
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import ColorPicker from 'react-color';

const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger;

export interface IWaveOptionsProps {
  setSolid: Dispatch<SetStateAction<number>>;
  solid: number;
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
  setStrokeShrink: Dispatch<SetStateAction<boolean>>;
  strokeShrink: boolean;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  strokeWidth: number;
}

const WaveOptions: React.FunctionComponent<IWaveOptionsProps> = ({
  setSolid,
  solid,
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
  setStrokeShrink,
  strokeShrink,
  setStrokeWidth,
  strokeWidth,
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
      <Divider></Divider>

      {/* -------------- SHAPE -------------- */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Shape
      </Heading>

      <Heading as="h4" size="xs" opacity={0.5}>
        Balance
      </Heading>
      <HStack>
        <Icon
          onClick={() => balance > 0 && setBalance(balance - 0.1)}
          boxSize="9"
          viewBox="0 0 456 456"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            d="M223 441C126.52 441 29.5814 334.5 29.5814 149.5C121.446 210 159.987 133 229 133C292.455 133 311.556 216 428.286 193.5C428.286 345 312.282 441 223 441Z"
            fill="white"
          />
          <path
            d="M223 441C108.125 441 15 345.637 15 228C15 110.363 108.125 15 223 15C337.875 15 431 110.363 431 228C431 345.637 337.875 441 223 441ZM223 441C126.52 441 29.5814 334.5 29.5814 149.5C121.446 210 159.987 133 229 133C292.455 133 311.556 216 428.286 193.5C428.286 345 312.282 441 223 441Z"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
        <Slider
          aria-label="balance"
          value={balance}
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
        <Icon
          onClick={() => balance < 1 && setBalance(balance + 0.1)}
          boxSize="9"
          viewBox="0 0 456 456"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            d="M228 441C326.799 441 416.47 333.233 440.547 242C320.547 347.96 291.172 286 220.5 286C155.52 286 147.21 393.576 40.9649 330C77.2726 378.5 136.572 441 228 441Z"
            fill="white"
          />
          <path
            d="M228 441C345.637 441 441 345.637 441 228C441 110.363 345.637 15 228 15C110.363 15 15 110.363 15 228C15 345.637 110.363 441 228 441ZM228 441C326.799 441 416.47 333.233 440.547 242C320.547 347.96 291.172 286 220.5 286C155.52 286 147.21 393.576 40.9649 330C77.2726 378.5 136.572 441 228 441Z"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
      </HStack>

      <Heading as="h4" size="xs" opacity={0.5}>
        Velocity
      </Heading>
      <HStack>
        <Icon
          onClick={() => velocity > 0 && setVelocity(velocity - 25)}
          boxSize="9"
          viewBox="0 0 413 88"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M397 52.8456C270.337 109.564 319.092 25.1275 217.324 15.6608C115.556 6.19414 99.9447 102.998 15 15.6608"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
        <Slider aria-label="velocity" value={velocity} min={0} max={250} onChange={(val) => setVelocity(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <Icon
          onClick={() => velocity < 250 && setVelocity(velocity + 25)}
          boxSize="9"
          viewBox="0 0 412 286"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M16 183.63C142 436.353 93.5 60.1255 194.735 17.9444C295.97 -24.2367 311.5 407.099 396 17.9444"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
      </HStack>

      <Heading as="h4" size="xs" opacity={0.5}>
        Complexity
      </Heading>
      <HStack>
        <Icon
          onClick={() => breaks > 0 && setBreaks(breaks - 1)}
          boxSize="9"
          viewBox="0 0 420 78"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M16 34.8824C200 124 203.5 -37.5 404 34.8824"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
        <Slider aria-label="complexity" value={breaks} min={0} max={20} onChange={(val) => setBreaks(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Icon
          onClick={() => breaks < 20 && setBreaks(breaks + 1)}
          boxSize="9"
          viewBox="0 0 432 158"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M414 15.5C421.5 43.1667 417 142.5 367 142.5C317 142.5 342.5 50 290 50C237.5 50 252 142.5 202 142.5C157 142.5 170 94 132 94C86.0001 94 107 142.5 61.0001 142.5C28 142.5 16 121 16 121"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
      </HStack>

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
      <HStack>
        <Icon
          onClick={() => distance > 0 && setDistance(distance - 1)}
          boxSize="9"
          viewBox="0 0 446 123"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            d="M16 34.257C200 123.375 203.5 -38.1254 404 34.257"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
          <path
            d="M42 90.257C226 179.375 229.5 17.8746 430 90.257"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
        <Slider
          aria-label="layer-distance"
          value={distance}
          min={0}
          max={10}
          onChange={(val) => setDistance(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Icon
          onClick={() => distance < 10 && setDistance(distance + 1)}
          boxSize="9"
          viewBox="0 0 445 303"
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          <path
            d="M15 45.8134C199 188.412 202.5 -70.0069 403 45.8134"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
          <path
            d="M41 241.457C225 391.661 228.5 119.459 429 241.457"
            stroke="white"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 1"
          />
        </Icon>
      </HStack>

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
        <Popover>
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
          <PopoverContent rootProps={{ style: { right: 0 } }} width="fit-content">
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
          <PopoverContent rootProps={{ style: { right: 0 } }} width="fit-content">
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
          <PopoverContent rootProps={{ style: { right: 0 } }} width="fit-content">
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
          <PopoverContent rootProps={{ style: { right: 0 } }} width="fit-content">
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
