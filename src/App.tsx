// React
import { useCallback, useRef, useState } from 'react';

// Components
import Bubble from './components/Blob';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu/RightMenu';
import StackedWave from './components/Waves';

// Design
import { Flex, Container, Circle, chakra } from '@chakra-ui/react';

// Utils
import { downloadBlob } from './utils/downloadBlob';
import { isValidMotionProp, motion } from 'framer-motion';
import { IDesignModes } from './utils/types/designModes';

// Components
import WaveOptions from './components/RightMenu/Waves/WaveOptions';
import useWaveOptions from './utils/customHooks/useWaveOptions';
import DiceIcon from './components/DiceIcon';
import useBubbleOptions from './utils/customHooks/useBubbleOptions';
import BubbleOptions from './components/RightMenu/Bubble/BubbleOptions';

function App() {
  /* --------- RANDOMNESS STATE --------- */
  const [seed, setSeed] = useState<number>(0);

  /* --------- DIMENSION STATE --------- */
  const [width, setWidth] = useState<number>(896);
  const [height, setHeight] = useState<number>(504);
  const [aspectRatio, setAspectRatio] = useState<string>('16 : 9');

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
  const bubbleOptions = useBubbleOptions();
  // ...

  /* --------- RENDER CANVAS --------- */
  const renderDesign = useCallback(() => {
    switch (design) {
      case 'waves': {
        return <StackedWave width={width} height={height} svgRef={svgRef} seed={seed} {...waveOptions.get} />;
      }
      case 'bubble': {
        return <Bubble width={width} height={height} svgRef={svgRef} seed={seed} {...bubbleOptions.get} />;
      }
    }
  }, [design, seed, width, height, waveOptions.get]);

  /* --------- RENDER RIGHT MENU --------- */
  const renderMenu = useCallback(() => {
    switch (design) {
      case 'waves': {
        return <WaveOptions {...waveOptions.get} {...waveOptions.set} />;
      }
      case 'bubble': {
        return <BubbleOptions {...bubbleOptions.get} {...bubbleOptions.set} />;
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

        {/* ------ RANDOMIZE BUTTON ----- */}
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
          position="relative"
          bottom="40px"
          marginBottom="-60px"
          // @ts-ignore
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: (Math.random() - 0.5) * 360 * 1.5 }}
        >
          <DiceIcon />
        </Circle>
      </Container>

      {/* ------ RIGHT MENU ----- */}
      <RightMenu
        onClick={downloadSVG}
        handleWidthChange={setWidth}
        handleHeightChange={setHeight}
        setAspectRatio={setAspectRatio}
        aspectRatio={aspectRatio}
        width={width}
        height={height}
      >
        {renderMenu()}
      </RightMenu>
    </Flex>
  );
}

export default App;
