// React
import { useCallback, useRef } from 'react';

// Components
import Bubble from './components/Blob';
import Menu from './components/menu';
import StackedWave from './components/StackedWave';

// Design
import { Flex, Spacer, Stack, Container, Image, Heading } from '@chakra-ui/react';

// Utils
import { downloadBlob } from './utils/downloadBlob';
import { ViewIcon } from '@chakra-ui/icons';

function App() {
  // test downloading
  const svgRef = useRef<SVGAElement | null>(null);

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current?.innerHTML;
    const blob = new Blob([svg as BlobPart], { type: 'image/svg+xml' });
    downloadBlob(blob, 'design.svg');
  }, []);

  return (
    <Flex direction="row" overflow="hidden">
      <Container minW="250px" maxW="250px" height="100vh" overflow="scroll" centerContent>
        <Container
          minW="250px"
          maxW="250px"
          height="70px"
          position="fixed"
          zIndex={2}
          bgColor="#1A202C"
          centerContent
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Heading>React</Heading>
            <ViewIcon></ViewIcon>
          </Flex>
        </Container>
        <Stack marginTop={100} scrollBehavior="smooth">
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Stack>
      </Container>
      <div style={{ display: 'flex', gap: 10 }}>
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
        <Bubble
          svgRef={svgRef}
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
          velocity={180}
          size={20}
          stroke={false}
        />
        <StackedWave
          type="peak"
          seed={2}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#0066FF"
          stopWaveColor="#2e82ff"
          bgColor="#002233"
          shadowX={0}
          shadowY={0}
          shadowSD={15}
          shadowOpacity={0.5}
          balance={0.5}
          velocity={150}
          breaks={6}
          stacks={2}
          distance={5}
          stroke={false}
        />
        <StackedWave
          type="peak"
          seed={1}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#309e24"
          stopWaveColor="#e5de00"
          bgColor="#540e42"
          balance={0.1}
          velocity={10}
          breaks={60}
          stacks={40}
          distance={0.7}
          stroke={true}
          strokeWidth={3}
          strokeShrink={true}
        />
        {/* <button onClick = {downloadSVG}>Download</button> */}
      </div>
    </Flex>
  );
}

export default App;
