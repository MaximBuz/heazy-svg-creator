// React
import { useCallback, useRef, useState } from 'react';

// Components
import Bubble from './Components/Bubble';
import LeftMenu from './Components/TemplatesMenu';
import RightMenu from './Components/OptionsMenu/RightMenu';
import StackedWave from './Components/Waves';
import Corners from './Components/Corners';

// Design
import { Flex, Container } from '@chakra-ui/react';

// Utils
import { IDesignModes } from './Types/designModes';

// Components
import WaveOptions from './Components/Waves/OptionsMenu';
import useWaveOptions from './Hooks/useWaveOptions';
import useBubbleOptions from './Hooks/useBubbleOptions';
import BubbleOptions from './Components/Bubble/OptionsMenu';
import useCornerOptions from './Hooks/useCornerOptions';
import CornerOptions from './Components/Corners/OptionsMenu';
import Marker from './Components/Marker';
import useMarkerOptions from './Hooks/useMarkerOptions';
import MarkerOptions from './Components/Marker/OptionsMenu';
import useCanvasDimensions from './Hooks/useCanvasDimensions';
import CanvasControls from './Components/Canvas/CanvasControls';
import InitialAnimation from './Components/InitialAnimation';

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
