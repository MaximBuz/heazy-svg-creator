// React
import { useCallback, useRef, useState } from 'react';

// Components
import Bubble from './components/Blob';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu/RightMenu';
import StackedWave from './components/StackedWave';

// Design
import { Flex, Container, AspectRatio } from '@chakra-ui/react';

// Utils
import { aspectRatio } from './utils/calculations/aspectRatio';
import { downloadBlob } from './utils/downloadBlob';

function App() {
  /* --------- DIMENSION CHANGE --------- */
  const [width, setWidth] = useState<number>(950);
  const [height, setHeight] = useState<number>(600);

  const canvasDimensions = {
    width: width,
    height: height,
    widthRatio: aspectRatio(width / height, 50)[0],
    heightRatio: aspectRatio(width / height, 50)[1],
  };

  /* --------- DOWNLOADING --------- */
  const svgRef = useRef<SVGAElement | null>(null);
  const downloadSVG = useCallback(() => {
    const svg = svgRef.current?.innerHTML;
    const blob = new Blob([svg as BlobPart], { type: 'image/svg+xml' });
    downloadBlob(blob, 'design.svg');
  }, []);

  return (
    <Flex
      direction="row"
      bgColor="#141820"
      overflow="hidden"
      justifyContent="space-between"
      w="100vw"
      h="100vh"
    >
      <LeftMenu></LeftMenu>
      <Container sx={{transform: "scale(1)"}} justifyContent="center" alignContent="center" centerContent padding="3" m="0">
        {/* <Bubble
          svgRef={svgRef}
          seed={1}
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
        /> */}

          <StackedWave
            svgRef={svgRef}
            type="peak"
            seed={5}
            width={canvasDimensions.width}
            height={canvasDimensions.height}
            startWaveColor="#035adc"
            stopWaveColor="#5195fb"
            bgColor="#002233"
            shadowX={0}
            shadowY={0}
            shadowSD={10}
            shadowOpacity={0.5}
            balance={0.5}
            velocity={100}
            breaks={6}
            stacks={3}
            distance={4.3}
            stroke={false}
          />


        {/* <StackedWave
          type="peak"
          seed={2}
          width={canvasDimensions.width}
          height={canvasDimensions.height}
          startWaveColor="#309e24"
          stopWaveColor="#e5de00"
          bgColor="#002233"
          balance={0.5}
          velocity={30}
          breaks={40}
          stacks={20}
          distance={0.5}
          stroke={true}
          strokeWidth={2}
          strokeShrink={true}
        /> */}
      </Container>
      <RightMenu
        onClick={downloadSVG}
        handleWidthChange={setWidth}
        handleHeightChange={setHeight}
        canvasDimensions={canvasDimensions}
      ></RightMenu>
    </Flex>
  );
}

export default App;
