// React
import { useCallback, useRef } from 'react';

// Components
import Bubble from './components/Blob';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu/RightMenu';
import StackedWave from './components/StackedWave';

// Design
import { Flex, Stack, Text, Container, Image, Heading, chakra, Box, Icon } from '@chakra-ui/react';

// Utils
import { downloadBlob } from './utils/downloadBlob';

function App() {
  // test downloading
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
      <Container flexGrow={2} justifyContent="center" alignContent="center" centerContent padding="10">
        {/* <StackedWave
          svgRef = {svgRef}
          type="smooth"
          seed={1}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#B7E7FF"
          stopWaveColor="#927ace"
          bgColor="#E8F7FF"
          shadowX={0}
          shadowY={5}
          shadowSD={10}
          shadowOpacity={0.5}
          balance={0.50}
          velocity={120}
          breaks={1}
          stacks={3}
          distance={5}
          stroke={false}
        /> */}
        {/* <Bubble
          svgRef={svgRef}
          seed={1}
          width={900}
          height={650}
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
          width={600}
          height={450}
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
          width={900}
          height={650}
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
      <RightMenu onClick={downloadSVG} canvasSize={{
        width: 600,
        height: 450,
        widthRatio: 7,
        heightRatio: 5
      }}></RightMenu>
    </Flex>
  );
}

export default App;
