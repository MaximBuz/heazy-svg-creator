// React
import { useCallback, useRef, useState } from 'react';

// Components
import {
  InitialAnimation,
  Waves,
  WaveOptions,
  Bubble,
  BubbleOptions,
  Corners,
  CornerOptions,
  Marker,
  MarkerOptions,
  CanvasControls,
  useCanvasDimensions,
  TemplateMenu,
  OptionsMenu,
} from './components';

// Styling
import { Flex, Container, FlexProps, ContainerProps } from '@chakra-ui/react';

// Utils
import { IDesignModes } from './components/Canvas/Types/designModes';
import { IWaveAllProps } from './components/Designs/Waves/Types/waveProps';
import { initialWaveState } from './components/Designs/Waves/initialState';
import { IBubbleAllProps } from './components/Designs/Bubble/Types/bubbleProps';
import { initialBubbleState } from './components/Designs/Bubble/initialState';
import { initialCornerState } from './components/Designs/Corners/initialState';
import { ICornerAllProps } from './components/Designs/Corners/Types/cornerProps';
import { initialMarkerState } from './components/Designs/Marker/initialState';
import { IMarkerAllProps } from './components/Designs/Marker/Types/markerProps';
import { AuthProvider } from './contexts/Auth';
import UserMenu from './components/UserMenu';

function App() {
  /* --------- CANVAS STATE --------- */
  const [seed, setSeed] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(1);
  const [design, setDesign] = useState<IDesignModes>('waves');
  const [setWidth, setHeight, canvasDimensions] = useCanvasDimensions(800, 600);
  const svgRef = useRef<SVGAElement | null>(null);

  /* --------- OPTIONS MENU STATE --------- */
  const [waveState, setWaveState] = useState<IWaveAllProps>(initialWaveState);
  const [bubbleState, setBubbleState] = useState<IBubbleAllProps>(initialBubbleState);
  const [cornerState, setCornerState] = useState<ICornerAllProps>(initialCornerState);
  const [markerState, setMarkerState] = useState<IMarkerAllProps>(initialMarkerState);

  /* --------- RENDERING --------- */
  const renderCanvas = useCallback(() => {
    if (design === 'waves') return <Waves {...canvasDimensions} {...waveState} svgRef={svgRef} seed={seed} />;
    if (design === 'bubble')
      return <Bubble {...canvasDimensions} {...bubbleState} svgRef={svgRef} seed={seed} />;
    if (design === 'corners')
      return <Corners {...canvasDimensions} {...cornerState} svgRef={svgRef} seed={seed} />;
    if (design === 'marker')
      return <Marker {...canvasDimensions} {...markerState} svgRef={svgRef} seed={seed} />;
  }, [design, seed, canvasDimensions, waveState, bubbleState, cornerState, markerState]);

  const renderOptionsMenu = useCallback(() => {
    if (design === 'waves') return <WaveOptions state={waveState} setState={setWaveState} />;
    if (design === 'bubble') return <BubbleOptions state={bubbleState} setState={setBubbleState} />;
    if (design === 'corners') return <CornerOptions state={cornerState} setState={setCornerState} />;
    if (design === 'marker') return <MarkerOptions state={markerState} setState={setMarkerState} />;
  }, [design, waveState, bubbleState, cornerState, markerState]);

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
      <InitialAnimation />
      <Flex {...wrapperStyles}>
        <TemplateMenu activeDesign={design} setDesign={setDesign}></TemplateMenu>
        <AuthProvider>
          <UserMenu />
        </AuthProvider>
        <Container {...canvasStyles}>{renderCanvas()}</Container>
        <CanvasControls seed={seed} setSeed={setSeed} setZoom={setZoom} />
        <OptionsMenu svgRef={svgRef} setWidth={setWidth} setHeight={setHeight} dimensions={canvasDimensions}>
          {renderOptionsMenu()}
        </OptionsMenu>
      </Flex>
    </>
  );
}

export default App;
