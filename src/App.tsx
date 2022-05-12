// React
import { useCallback, useEffect, useRef, useState } from 'react';

// Components
import Bubble from './components/Blob';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu/RightMenu';
import StackedWave from './components/Waves';
import Corners from './components/Corners';

// Design
import { Flex, Container, Circle, Box, Icon } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import LogoAnimation from './LogoAnimation.json';

// Utils
import { downloadBlob } from './utils/downloadBlob';
import { motion } from 'framer-motion';
import { IDesignModes } from './utils/types/designModes';

// Components
import WaveOptions from './components/RightMenu/Waves/WaveOptions';
import useWaveOptions from './utils/customHooks/useWaveOptions';
import DiceIcon from './components/DiceIcon';
import useBubbleOptions from './utils/customHooks/useBubbleOptions';
import BubbleOptions from './components/RightMenu/Bubble/BubbleOptions';
import useCornerOptions from './utils/customHooks/useCornerOptions';
import CornerOptions from './components/RightMenu/Corners/CornerOptions';
import Marker from './components/Marker';
import useMarkerOptions from './utils/customHooks/useMarkerOptions';
import MarkerOptions from './components/RightMenu/Marker/MarkerOptions';
import SliderIconWrapper from './components/RightMenu/SliderIconWrapper';

function App() {
  /* --------- RANDOMNESS STATE --------- */
  const [seed, setSeed] = useState<number>(0);

  /* --------- DIMENSION STATE --------- */
  const [width, setWidth] = useState<number>(900);
  const [height, setHeight] = useState<number>(650);
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
  const cornerOptions = useCornerOptions();
  const markerOptions = useMarkerOptions();

  /* --------- RENDER CANVAS --------- */
  const renderDesign = useCallback(() => {
    switch (design) {
      case 'waves': {
        return <StackedWave width={width} height={height} svgRef={svgRef} seed={seed} {...waveOptions.get} />;
      }
      case 'bubble': {
        return <Bubble width={width} height={height} svgRef={svgRef} seed={seed} {...bubbleOptions.get} />;
      }
      case 'corners': {
        return <Corners width={width} height={height} svgRef={svgRef} seed={seed} {...cornerOptions.get} />;
      }
      case 'marker': {
        return <Marker width={width} height={height} svgRef={svgRef} seed={seed} {...markerOptions.get} />;
      }
    }
  }, [design, seed, width, height, waveOptions.get, bubbleOptions.get, cornerOptions.get, markerOptions.get]);

  /* --------- RENDER RIGHT MENU --------- */
  const renderMenu = useCallback(() => {
    switch (design) {
      case 'waves': {
        return <WaveOptions {...waveOptions.get} {...waveOptions.set} />;
      }
      case 'bubble': {
        return <BubbleOptions {...bubbleOptions.get} {...bubbleOptions.set} />;
      }
      case 'corners': {
        return <CornerOptions {...cornerOptions.get} {...cornerOptions.set} />;
      }
      case 'marker': {
        return <MarkerOptions {...markerOptions.get} {...markerOptions.set} />;
      }
    }
  }, [design, waveOptions, bubbleOptions, cornerOptions, markerOptions]);

  /* --------- SHOW ANIMATION ON INITIAL RENDER --------- */
  const [initialAnimation, setInitialAnimation] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<number>(1);

  useEffect(() => {
    (async () => {
      await setTimeout(() => {
        setIsVisible(0);
      }, 2000);

      await setTimeout(() => {
        setInitialAnimation(false);
      }, 4000);
    })();
  }, []);

  return (
    <>
      {initialAnimation && (
        <Flex
          direction="row"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          zIndex={1000}
          w="100vw"
          h="100vh"
          style={{
            position: 'absolute',
            backgroundColor: '#141820e3',
            zIndex: 1000,
            margin: '0 auto',
            left: ' 50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: isVisible,
            transition: 'all 1s ease',
          }}
        >
          <Lottie
            animationData={LogoAnimation}
            loop={false}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </Flex>
      )}
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

        {/* ------ ZOOM BUTTONS ----- */}
        <Flex position="absolute" gap="8px" direction="column" bottom="15px" right="335px" id="testing">
          <Icon
            as="button"
            onClick={() => {}}
            boxSize="10"
            viewBox="0 0 24 24"
            rounded="full"
            outline="5px solid #141820"
            p="2.5"
            bg="#313640"
            transition="0.2s"
            _hover={{ background: '#373d48', cursor: 'pointer', transform: 'scale(1.1)' }}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              d="M15,10H12V7a1,1,0,0,0-2,0v3H7a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V12h3a1,1,0,0,0,0-2Zm6.71,10.29L18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
            />
          </Icon>

          <Icon
            as="button"
            onClick={() => {}}
            boxSize="10"
            viewBox="0 0 24 24"
            rounded="full"
            outline="5px solid #141820"
            p="2.5"
            bg="#313640"
            transition="0.2s"
            _hover={{ background: '#373d48', cursor: 'pointer', transform: 'scale(1.1)' }}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Zm4-8H7a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"
            />
          </Icon>
        </Flex>

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
    </>
  );
}

export default App;
