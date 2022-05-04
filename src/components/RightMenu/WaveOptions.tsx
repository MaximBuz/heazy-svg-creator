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
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import ColorPicker from 'react-color';
import Color from './Waves/Color';
import Direction from './Waves/Direction';
import Shape from './Waves/Shape';

// Components
import Variants from './Waves/Variants';

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
      <Variants
        setSolid={setSolid}
        solid={solid}
        setStrokeShrink={setStrokeShrink}
        strokeShrink={strokeShrink}
        setStrokeWidth={setStrokeWidth}
        strokeWidth={strokeWidth}
        setSmooth={setSmooth}
      ></Variants>

      <Divider />

      <Shape
        balance={balance}
        velocity={velocity}
        breaks={breaks}
        stacks={stacks}
        distance={distance}
        setBalance={setBalance}
        setVelocity={setVelocity}
        setBreaks={setBreaks}
        setStacks={setStacks}
        setDistance={setDistance}
      ></Shape>

      <Divider />

      <Direction setDirection={setDirection}></Direction>

      <Divider></Divider>

      <Color
        bgColor={bgColor}
        setBgColor={setBgColor}
        startColor={startColor}
        setStartColor={setStartColor}
        stopColor={stopColor}
        setStopColor={setStopColor}
      ></Color>
      
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
                as="button"
                size="36px"
                bgColor={shadowColor}
                boxShadow="0 0 0 1px #52555A"
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
