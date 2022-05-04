// React
import { useCallback, useMemo, useRef, useState } from 'react';

// Components
import Bubble from './components/Blob';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu/RightMenu';
import StackedWave from './components/StackedWave';

// Design
import { Flex, Container, Button, Icon, Circle, Stack } from '@chakra-ui/react';
import Dice from './utils/dice.svg';

// Utils
import { aspectRatio } from './utils/calculations/aspectRatio';
import { downloadBlob } from './utils/downloadBlob';
import { motion } from 'framer-motion';
import { IDesignModes } from './utils/types/designModes';
import { ICanvasDimensions } from './utils/types/canvasDimensions';
import WaveOptions from './components/RightMenu/WaveOptions';

function App() {
  /* --------- SEED CHANGE --------- */
  const [seed, setSeed] = useState<number>(0);

  /* --------- DIMENSION CHANGE --------- */
  const [width, setWidth] = useState<number>(850);
  const [height, setHeight] = useState<number>(600);

  const canvasDimensions = useMemo<ICanvasDimensions>(() => {
    return {
      width: width,
      height: height,
      widthRatio: aspectRatio(width / height, 50)[0],
      heightRatio: aspectRatio(width / height, 50)[1],
    };
  }, [width, height]);

  /* --------- DOWNLOADING --------- */
  const svgRef = useRef<SVGAElement | null>(null);
  const downloadSVG = useCallback(() => {
    const svg = svgRef.current?.outerHTML;
    const blob = new Blob([svg as BlobPart], { type: 'image/svg+xml' });
    downloadBlob(blob, 'design.svg');
  }, []);

  /* --------- DESIGN CHANGE --------- */
  const [design, setDesign] = useState<IDesignModes>('waves');

  // wave options state
  const [solid, setSolid] = useState<number>(0);
  const [smooth, setSmooth] = useState<number>(1);
  const [direction, setDirection] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>('#002438');
  const [startColor, setStartColor] = useState<string>('#dc0307');
  const [stopColor, setStopColor] = useState<string>('#8f0091');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowOpacity, setShadowOpacity] = useState<number>(0.5);
  const [shadowColor, setShadowColor] = useState<string>('#000000');
  const [balance, setBalance] = useState<number>(0.5);
  const [velocity, setVelocity] = useState<number>(200);
  const [breaks, setBreaks] = useState<number>(2);
  const [stacks, setStacks] = useState<number>(4);
  const [distance, setDistance] = useState<number>(3.5);
  const [strokeShrink, setStrokeShrink] = useState<boolean>(false);
  const [strokeWidth, setStrokeWidth] = useState<number>(1);

  // rendering correct canvas
  const renderDesign = useCallback(() => {
    switch (design) {
      case 'waves': {
        return (
          <StackedWave
            svgRef={svgRef}
            type={smooth ? 'smooth' : 'peak'}
            seed={seed}
            width={canvasDimensions.width}
            height={canvasDimensions.height}
            startWaveColor={startColor}
            stopWaveColor={stopColor}
            bgColor={bgColor}
            shadowX={shadowX}
            shadowY={shadowY}
            shadowSD={shadowSD}
            shadowOpacity={shadowOpacity}
            shadowColor={shadowColor}
            balance={balance}
            velocity={velocity}
            breaks={breaks}
            stacks={stacks}
            distance={distance}
            stroke={solid ? true : false}
            direction={direction}
            strokeShrink={strokeShrink}
            strokeWidth={strokeWidth}
          />
        );
      }
      case 'bubble': {
        return (
          <Bubble
            svgRef={svgRef}
            seed={seed}
            width={canvasDimensions.width}
            height={canvasDimensions.height}
            startWaveColor="#A7233A"
            stopWaveColor="#9e1027"
            bgColor="#001320"
            shadowX={0}
            shadowY={5}
            shadowSD={10}
            shadowOpacity={0.5}
            velocity={100}
            size={3}
            stroke={false}
          />
        );
      }
    }
  }, [
    design,
    smooth,
    seed,
    canvasDimensions.width,
    canvasDimensions.height,
    startColor,
    stopColor,
    bgColor,
    shadowX,
    shadowY,
    shadowSD,
    shadowOpacity,
    shadowColor,
    balance,
    velocity,
    breaks,
    stacks,
    distance,
    solid,
    direction,
    strokeShrink,
    strokeWidth,
  ]);

  // rendering correct menu options
  const renderMenu = useCallback(() => {
    switch (design) {
      case 'waves': {
        return (
          <WaveOptions
            setSolid={setSolid}
            solid={solid}
            setSmooth={setSmooth}
            setDirection={setDirection}
            setBgColor={setBgColor}
            bgColor={bgColor}
            setStartColor={setStartColor}
            setStopColor={setStopColor}
            startColor={startColor}
            stopColor={stopColor}
            shadowX={shadowX}
            setShadowX={setShadowX}
            shadowY={shadowY}
            setShadowY={setShadowY}
            shadowSD={shadowSD}
            setShadowSD={setShadowSD}
            shadowOpacity={shadowOpacity}
            setShadowOpacity={setShadowOpacity}
            shadowColor={shadowColor}
            setShadowColor={setShadowColor}
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
            setStrokeShrink={setStrokeShrink}
            strokeShrink={strokeShrink}
            setStrokeWidth={setStrokeWidth}
            strokeWidth={strokeWidth}
          />
        );
      }
    }
  }, [design, solid, bgColor, startColor, stopColor, shadowX, shadowY, shadowSD, shadowOpacity, shadowColor, balance, velocity, breaks, stacks, distance, strokeShrink, strokeWidth]);

  return (
    <Flex
      direction="row"
      bgColor="#141820"
      overflow="hidden"
      justifyContent="space-between"
      w="100vw"
      h="100vh"
    >
      <LeftMenu setDesign={setDesign}></LeftMenu>
      <Container
        sx={{ transform: 'scale(1)' }}
        justifyContent="center"
        alignContent="center"
        centerContent
        padding="3"
        m="0"
      >
        {renderDesign()}

        <Circle
          maxWidth={80}
          as={motion.button}
          justifyContent="center"
          alignItems="center"
          bgColor="#313640"
          p="2.5"
          centerContent
          onClick={() => setSeed(seed + 1)}
          border="8px"
          borderColor="#141820"
          position="absolute"
          bottom="40px"
        >
          <Icon boxSize="50" viewBox="0 0 350 400" color="white">
            <g transform="translate(0 20)">
              <path
                d="M268.724 34.4782L120.492 11.5117C100.836 8.46621 80.7743 13.354 64.7214 25.0999C48.6685 36.8457 37.9391 54.4875 34.8936 74.1442L11.9272 222.376C8.88164 242.032 13.7694 262.094 25.5153 278.147C37.2612 294.2 54.903 304.929 74.5597 307.975L222.791 330.941C242.448 333.986 262.509 329.099 278.562 317.353C294.615 305.607 305.344 287.965 308.39 268.308L331.356 120.077C334.402 100.42 329.514 80.3589 317.768 64.306C306.022 48.2531 288.381 37.5237 268.724 34.4782ZM278.744 263.715C276.916 275.509 270.479 286.094 260.847 293.142C251.215 300.189 239.178 303.122 227.384 301.295L79.1529 278.328C67.3589 276.501 56.7739 270.063 49.7263 260.432C42.6788 250.8 39.7461 238.763 41.5735 226.969L64.5399 78.7375C66.3672 66.9435 72.8048 56.3584 82.4366 49.3109C92.0683 42.2634 104.105 39.3307 115.899 41.158L264.131 64.1244C275.925 65.9518 286.51 72.3894 293.557 82.0211C300.605 91.6529 303.537 103.69 301.71 115.484L278.744 263.715Z"
                fill="white"
              />
              <circle
                cx="133.116"
                cy="116.179"
                r="28.5"
                transform="rotate(8.80717 133.116 116.179)"
                fill="white"
              />
              <circle
                cx="225.019"
                cy="130.418"
                r="28.5"
                transform="rotate(8.80717 225.019 130.418)"
                fill="white"
              />
              <circle
                cx="118.724"
                cy="209.07"
                r="28.5"
                transform="rotate(8.80717 118.724 209.07)"
                fill="white"
              />
              <circle
                cx="210.627"
                cy="223.309"
                r="28.5"
                transform="rotate(8.80717 210.627 223.309)"
                fill="white"
              />
            </g>
          </Icon>
        </Circle>
      </Container>
      <RightMenu
        onClick={downloadSVG}
        handleWidthChange={setWidth}
        handleHeightChange={setHeight}
        canvasDimensions={canvasDimensions}
      >
        {renderMenu()}
      </RightMenu>
    </Flex>
  );
}

export default App;
