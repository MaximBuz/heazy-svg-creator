// React
import { useCallback, useRef, useState } from 'react';

// Components
import Bubble from './components/Bubble';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu/RightMenu';
import StackedWave from './components/Waves';
import Corners from './components/Corners';

// Design
import { Flex, Container } from '@chakra-ui/react';

// Utils
import { IDesignModes } from './utils/types/designModes';

// Components
import WaveOptions from './components/RightMenu/Waves/WaveOptions';
import useWaveOptions from './utils/customHooks/useWaveOptions';
import useBubbleOptions from './utils/customHooks/useBubbleOptions';
import BubbleOptions from './components/RightMenu/Bubble/BubbleOptions';
import useCornerOptions from './utils/customHooks/useCornerOptions';
import CornerOptions from './components/RightMenu/Corners/CornerOptions';
import Marker from './components/Marker';
import useMarkerOptions from './utils/customHooks/useMarkerOptions';
import MarkerOptions from './components/RightMenu/Marker/MarkerOptions';
import useCanvasDimensions from './utils/customHooks/useCanvasDimensions';
import CanvasControls from './components/CanvasControls';
import InitialAnimation from './components/InitialAnimation';

function App() {
  /* --------- RANDOMNESS --------- */
  const [seed, setSeed] = useState<number>(1);

  /* --------- ZOOMING --------- */
  const [zoom, setZoom] = useState<number>(1);

  /* --------- DIMENSION --------- */
  const [setWidth, setHeight, canvasDimensions] = useCanvasDimensions(800, 600);

  /* --------- SVG REF FOR DOWNLOADING --------- */
  const svgRef = useRef<SVGAElement | null>(null);

  /* --------- WHICH DESIGN --------- */
  const [design, setDesign] = useState<IDesignModes>('waves');

  /* --------- DESIGN OPTIONS --------- */
  const waveOptions = useWaveOptions();
  const bubbleOptions = useBubbleOptions();
  const cornerOptions = useCornerOptions();
  const markerOptions = useMarkerOptions();

  /* --------- RENDER CANVAS --------- */
  const renderDesign = useCallback(() => {
    switch (design) {
      case 'waves': {
        return <StackedWave {...canvasDimensions} svgRef={svgRef} seed={seed} {...waveOptions.get} />;
      }
      case 'bubble': {
        return <Bubble {...canvasDimensions} svgRef={svgRef} seed={seed} {...bubbleOptions.get} />;
      }
      case 'corners': {
        return <Corners {...canvasDimensions} svgRef={svgRef} seed={seed} {...cornerOptions.get} />;
      }
      case 'marker': {
        return <Marker {...canvasDimensions} svgRef={svgRef} seed={seed} {...markerOptions.get} />;
      }
    }
  }, [
    design,
    seed,
    canvasDimensions,
    waveOptions.get,
    bubbleOptions.get,
    cornerOptions.get,
    markerOptions.get,
  ]);

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

  return (
    <>
      {/* ------ PLAY INITIAL ANIMATION ON STARTUP ----- */}
      <InitialAnimation />

      <Flex
        direction="row"
        bgColor="#141820"
        overflow="hidden"
        justifyContent="space-between"
        w="100vw"
        h="100vh"
      >
        {/* ------ LEFT MENU ----- */}
        <LeftMenu activeDesign={design} setDesign={setDesign}></LeftMenu>

        {/* ------ CANVAS ----- */}
        <Container
          transform={`scale(${zoom})`}
          transition="transform 0.3s cubic-bezier(0,.5,.5,1)"
          justifyContent="center"
          alignContent="center"
          centerContent
          padding="3"
          m="0"
        >
          {renderDesign()}
        </Container>

        {/* ------ CONTROLLERS ----- */}
        <CanvasControls seed={seed} setSeed={setSeed} setZoom={setZoom} />

        {/* ------ RIGHT MENU ----- */}
        <RightMenu
          svgRef={svgRef}
          handleWidthChange={setWidth}
          handleHeightChange={setHeight}
          width={canvasDimensions.width}
          height={canvasDimensions.height}
          widthRatio={canvasDimensions.widthRatio}
          heightRatio={canvasDimensions.heightRatio}
        >
          {renderMenu()}
        </RightMenu>
      </Flex>
    </>
  );
}

export default App;
