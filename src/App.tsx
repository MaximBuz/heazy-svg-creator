// React
import { useCallback, useRef, useState } from 'react';

// Components
import Bubble from './Components/Bubble';
import TemplateMenu from './Components/TemplatesMenu';
import OptionsMenu from './Components/OptionsMenu';
import StackedWave from './Components/Waves';
import Corners from './Components/Corners';

// Design
import { Flex, Container, FlexProps, ContainerProps } from '@chakra-ui/react';

// Utils
import { IDesignModes } from './Types/designModes';

// Components
import WaveOptions from './Components/Waves/OptionsMenu';
import useWaveOptions from './Components/Waves/OptionsMenu/useWaveOptions';
import useBubbleOptions from './Components/Bubble/OptionsMenu/useBubbleOptions';
import BubbleOptions from './Components/Bubble/OptionsMenu';
import useCornerOptions from './Components/Corners/OptionsMenu/useCornerOptions';
import CornerOptions from './Components/Corners/OptionsMenu';
import Marker from './Components/Marker';
import useMarkerOptions from './Components/Marker/OptionsMenu/useMarkerOptions';
import MarkerOptions from './Components/Marker/OptionsMenu';
import useCanvasDimensions from './Components/Canvas/useCanvasDimensions';
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
  const renderCanvas = useCallback(() => {
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
  const renderOptionsMenu = useCallback(() => {
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

  /* --------- STYLES --------- */
  const wrapperStyles: FlexProps = {
    direction: 'row',
    bgColor: '#141820',
    overflow: 'hidden',
    justifyContent: 'space-between',
    w: '100vw',
    h: '100vh',
  };
  const canvasStyles: ContainerProps = {
    transform: `scale(${zoom})`,
    transition: 'transform 0.3s cubic-bezier(0,.5,.5,1)',
    justifyContent: 'center',
    alignContent: 'center',
    centerContent: true,
    padding: '3',
    m: '0',
  };
  return (
    <>
      {/* ------ PLAY INITIAL ANIMATION ON STARTUP ----- */}
      <InitialAnimation />

      <Flex {...wrapperStyles}>
        {/* ------ LEFT MENU ----- */}
        <TemplateMenu activeDesign={design} setDesign={setDesign}></TemplateMenu>

        {/* ------ CANVAS ----- */}
        <Container {...canvasStyles}>
          {renderCanvas()}
        </Container>

        {/* ------ CONTROLLS ----- */}
        <CanvasControls seed={seed} setSeed={setSeed} setZoom={setZoom} />

        {/* ------ RIGHT MENU ----- */}
        <OptionsMenu
          svgRef={svgRef}
          handleWidthChange={setWidth}
          handleHeightChange={setHeight}
          width={canvasDimensions.width}
          height={canvasDimensions.height}
          widthRatio={canvasDimensions.widthRatio}
          heightRatio={canvasDimensions.heightRatio}
        >
          {renderOptionsMenu()}
        </OptionsMenu>
      </Flex>
    </>
  );
}

export default App;
