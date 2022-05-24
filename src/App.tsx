// React
import { useCallback, useRef, useState } from 'react';

// Components
import Bubble from './Components/Designs/Bubble';
import TemplateMenu from './Components/TemplatesMenu';
import OptionsMenu from './Components/OptionsMenu';
import StackedWave from './Components/Designs/Waves';
import Corners from './Components/Designs/Corners';

// Design
import { Flex, Container, FlexProps, ContainerProps } from '@chakra-ui/react';

// Utils
import { IDesignModes } from './Components/Designs/Canvas/Types/designModes';

// Components
import WaveOptions from './Components/Designs/Waves/OptionsMenu';
import useWaveOptions from './Components/Designs/Waves/OptionsMenu/useWaveOptions';
import useBubbleOptions from './Components/Designs/Bubble/OptionsMenu/useBubbleOptions';
import BubbleOptions from './Components/Designs/Bubble/OptionsMenu';
import useCornerOptions from './Components/Designs/Corners/OptionsMenu/useCornerOptions';
import CornerOptions from './Components/Designs/Corners/OptionsMenu';
import Marker from './Components/Designs/Marker';
import useMarkerOptions from './Components/Designs/Marker/OptionsMenu/useMarkerOptions';
import MarkerOptions from './Components/Designs/Marker/OptionsMenu';
import useCanvasDimensions from './Components/Designs/Canvas/useCanvasDimensions';
import CanvasControls from './Components/Designs/Canvas/CanvasControls';
import InitialAnimation from './Components/InitialAnimation';

function App() {
  /* --------- CANVAS STATE --------- */
  const [seed, setSeed] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(1);
  const [design, setDesign] = useState<IDesignModes>('waves');
  const [setWidth, setHeight, canvasDimensions] = useCanvasDimensions(800, 600);

  /* --------- OPTIONS MENU STATE --------- */
  const waveOptions = useWaveOptions();
  const bubbleOptions = useBubbleOptions();
  const cornerOptions = useCornerOptions();
  const markerOptions = useMarkerOptions();

  /* --------- SVG REF FOR DOWNLOADING --------- */
  const svgRef = useRef<SVGAElement | null>(null);

  /* --------- RENDER CANVAS --------- */
  const renderCanvas = useCallback(() => {
    if (design === 'waves')
      return <StackedWave {...canvasDimensions} svgRef={svgRef} seed={seed} {...waveOptions.get} />;
    if (design === 'bubble')
      return <Bubble {...canvasDimensions} svgRef={svgRef} seed={seed} {...bubbleOptions.get} />;
    if (design === 'corners')
      return <Corners {...canvasDimensions} svgRef={svgRef} seed={seed} {...cornerOptions.get} />;
    if (design === 'marker')
      return <Marker {...canvasDimensions} svgRef={svgRef} seed={seed} {...markerOptions.get} />;
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
    if (design === 'waves') return <WaveOptions {...waveOptions.get} {...waveOptions.set} />;
    if (design === 'bubble') return <BubbleOptions {...bubbleOptions.get} {...bubbleOptions.set} />;
    if (design === 'corners') return <CornerOptions {...cornerOptions.get} {...cornerOptions.set} />;
    if (design === 'marker') return <MarkerOptions {...markerOptions.get} {...markerOptions.set} />;
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
        <Container {...canvasStyles}>{renderCanvas()}</Container>

        {/* ------ CONTROLLS ----- */}
        <CanvasControls seed={seed} setSeed={setSeed} setZoom={setZoom} />

        {/* ------ RIGHT MENU ----- */}
        <OptionsMenu
          svgRef={svgRef}
          setWidth={setWidth}
          setHeight={setHeight}
          dimensions={canvasDimensions}
        >
          {renderOptionsMenu()}
        </OptionsMenu>
      </Flex>
    </>
  );
}

export default App;
