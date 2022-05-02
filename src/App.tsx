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
    const svg = svgRef.current?.innerHTML;
    const blob = new Blob([svg as BlobPart], { type: 'image/svg+xml' });
    downloadBlob(blob, 'design.svg');
  }, []);

  /* --------- DESIGN CHANGE --------- */
  const [design, setDesign] = useState<IDesignModes>('waves');

  // wave options state
  const [solid, setSolid] = useState<number>(0);
  const [smooth, setSmooth] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>('#002233');
  const [startColor, setStartColor] = useState<string>('#035adc');
  const [stopColor, setStopColor] = useState<string>('#5195fb');

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
            shadowX={0}
            shadowY={0}
            shadowSD={10}
            shadowOpacity={0.5}
            balance={0.5}
            velocity={100}
            breaks={6}
            stacks={3}
            distance={4.3}
            stroke={solid ? true : false}
            direction={direction}
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
  }, [design, seed, canvasDimensions, solid, smooth, direction, bgColor, startColor, stopColor]);

  // rendering correct menu options
  const renderMenu = useCallback(() => {
    switch (design) {
      case 'waves': {
        return (
          <WaveOptions
            setSolid={setSolid}
            setSmooth={setSmooth}
            setDirection={setDirection}
            setBgColor={setBgColor}
            bgColor={bgColor}
            setStartColor={setStartColor}
            setStopColor={setStopColor}
            startColor={startColor}
            stopColor={stopColor}
          />
        );
      }
    }
  }, [design, bgColor, startColor, stopColor]);

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
          <Icon boxSize="50" viewBox="0 0 25 25" color="white">
            <path
              d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
              stroke="currentColor"
              fill="none"
            />
            <path
              d="M7.5 8C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 8C16.2239 8 16 7.77614 16 7.5C16 7.22386 16.2239 7 16.5 7C16.7761 7 17 7.22386 17 7.5C17 7.77614 16.7761 8 16.5 8Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12C12.5 12.2761 12.2761 12.5 12 12.5Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 17C7.22386 17 7 16.7761 7 16.5C7 16.2239 7.22386 16 7.5 16C7.77614 16 8 16.2239 8 16.5C8 16.7761 7.77614 17 7.5 17Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 17C16.2239 17 16 16.7761 16 16.5C16 16.2239 16.2239 16 16.5 16C16.7761 16 17 16.2239 17 16.5C17 16.7761 16.7761 17 16.5 17Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
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
