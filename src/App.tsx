// React
import { useCallback, useRef } from 'react';

// Components
import Bubble from './components/Blob';
import Menu from './components/menu';
import StackedWave from './components/StackedWave';

// Design
import { Flex, Stack, Text, Container, Image, Heading, Center, chakra, Box } from '@chakra-ui/react';
import stackedWave from './stackedWaves.svg';
import stackedWave2 from './stackedWaves2.svg';

// Utils
import { downloadBlob } from './utils/downloadBlob';
import { ViewIcon } from '@chakra-ui/icons';
import { isValidMotionProp, motion } from 'framer-motion';

function App() {
  // test downloading
  const svgRef = useRef<SVGAElement | null>(null);

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current?.innerHTML;
    const blob = new Blob([svg as BlobPart], { type: 'image/svg+xml' });
    downloadBlob(blob, 'design.svg');
  }, []);

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  });

  return (
    <Flex direction="row" overflow="hidden" justifyContent="space-between" minW="100vw" minH="100vh">
      <Container
        minW="180px"
        maxW="180px"
        height="100vh"
        position="fixed"
        left="0"
        top="0"
        bgColor="#232a37"
        overflow="scroll"
        sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
        centerContent
        boxShadow="dark-lg"
        p="0"
      >
        <Container
          minW="180px"
          maxW="180px"
          height="70px"
          position="fixed"
          zIndex={2}
          bgColor="#232a37"
          centerContent
        >
          <Center justifyContent="space-between" alignItems="center">
            <Heading>React</Heading>
            <ViewIcon></ViewIcon>
          </Center>
        </Container>
        <Stack marginTop={100} spacing={0} scrollBehavior="smooth">
          <Flex
            justifyContent="center"
            alignItems="center"
            p="4"
            position="relative"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
          >
            <Box as={motion.div} rounded="xl" whileHover={{ scale: 1 }} w="100%" h="100%" overflow="hidden">
              <Image w="100%" as={motion.img} whileHover={{ scale: 1.25 }} src={stackedWave} rounded="xl" />
            </Box>
            <Text
              as={motion.p}
              pointerEvents="none"
              position="absolute"
              zIndex={10}
              fontSize="sm"
              fontWeight="bold"
              align="center"
            >
              Waves
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            p="4"
            position="relative"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
          >
            <Box as={motion.div} rounded="xl" whileHover={{ scale: 1 }} w="100%" h="100%" overflow="hidden">
              <Image w="100%" as={motion.img} whileHover={{ scale: 1.25 }} src={stackedWave2} rounded="xl" />
            </Box>
            <Text
              as={motion.p}
              pointerEvents="none"
              position="absolute"
              zIndex={10}
              fontSize="sm"
              fontWeight="bold"
              align="center"
            >
              Blob
            </Text>
          </Flex>
        </Stack>
      </Container>
      <Container justifyContent="center" alignContent="center" centerContent>
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
        /> */}
        <StackedWave
          svgRef={svgRef}
          type="smooth"
          seed={2}
          width={800}
          height={500}
          startWaveColor="#B7E7FF"
          stopWaveColor="#927ace"
          bgColor="#320101"
          shadowX={0}
          shadowY={0}
          shadowSD={5}
          shadowOpacity={0.5}
          balance={0.5}
          velocity={50}
          breaks={6}
          stacks={3}
          distance={5}
          stroke={false}
        />
        {/* <StackedWave
          type="peak"
          seed={1}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#309e24"
          stopWaveColor="#e5de00"
          bgColor="#540e42"
          balance={0.1}
          velocity={10}
          breaks={20}
          stacks={50}
          distance={0.7}
          stroke={true}
          strokeWidth={1}
          strokeShrink={true}
        /> */}
        <button onClick={downloadSVG}>download</button>
      </Container>
    </Flex>
  );
}

export default App;
