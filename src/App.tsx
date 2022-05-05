// React
import { useCallback, useMemo, useRef, useState } from 'react';

// Components
import Bubble from './components/Blob';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu/RightMenu';
import StackedWave from './components/Waves';

// Design
import { Flex, Container, Icon, Circle } from '@chakra-ui/react';

// Utils
import { aspectRatio } from './utils/calculations/aspectRatio';
import { downloadBlob } from './utils/downloadBlob';
import { motion } from 'framer-motion';
import { IDesignModes } from './utils/types/designModes';
import { ICanvasDimensions } from './utils/types/canvasDimensions';

// Components
import WaveOptions from './components/RightMenu/Waves/WaveOptions';
import useWaveOptions from './utils/customHooks/useWaveOptions';
import DiceIcon from './components/DiceIcon';

function App() {
  /* --------- RANDOMNESS STATE --------- */
  const [seed, setSeed] = useState<number>(0);

  /* --------- DIMENSION STATE --------- */
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

  /* --------- VARIANT STATE --------- */
  const [design, setDesign] = useState<IDesignModes>('waves');

  /* --------- DOWNLOADING --------- */
  const svgRef = useRef<SVGAElement | null>(null);
  const downloadSVG = useCallback(() => {
    const svg = svgRef.current?.outerHTML;
    const blob = new Blob([svg as BlobPart], { type: 'image/svg+xml' });
    downloadBlob(blob, 'design.svg');
  }, []);


  /* --------- OPTION STATES --------- */
  const waveOptions = useWaveOptions();
  // const bubbleOptions = useBubbleOptions();
  // ...

  /* --------- RENDER CANVAS --------- */
  const renderDesign = useCallback(() => {
    switch (design) {
      case 'waves': {
        return (
          <StackedWave
            width={canvasDimensions.width}
            height={canvasDimensions.height}
            svgRef={svgRef}
            seed={seed}
            {...waveOptions.get}
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
  }, [design, seed, canvasDimensions.width, canvasDimensions.height, waveOptions.get]);

  /* --------- RENDER RIGHT MENU --------- */
  const renderMenu = useCallback(() => {
    switch (design) {
      case 'waves': {
        return <WaveOptions {...waveOptions.get} {...waveOptions.set} />;
      }
    }
  }, [design, waveOptions]);

  return (
    <Flex
      direction="row"
      bgColor="#141820"
      overflow="hidden"
      justifyContent="space-between"
      w="100vw"
      h="100vh"
    >
      {/* ------ LEFT MENU ----- */}
      <LeftMenu setDesign={setDesign}></LeftMenu>
      <Container
        sx={{ transform: 'scale(1)' }}
        justifyContent="center"
        alignContent="center"
        centerContent
        padding="3"
        m="0"
      >
        {/* ------ CANVAS ----- */}
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
          <DiceIcon />
        </Circle>
      </Container>

      {/* ------ RIGHT MENU ----- */}
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
