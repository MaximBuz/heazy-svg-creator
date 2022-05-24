// React
import { useCallback, useRef, useState } from 'react';

// Components
import {
  InitialAnimation,
  Waves,
  WaveOptions,
  useWaveOptions,
  Bubble,
  BubbleOptions,
  useBubbleOptions,
  Corners,
  CornerOptions,
  useCornerOptions,
  Marker,
  MarkerOptions,
  useMarkerOptions,
  CanvasControls,
  useCanvasDimensions,
  TemplateMenu,
  OptionsMenu,
} from './components';

// Styling
import { Flex, Container, FlexProps, ContainerProps } from '@chakra-ui/react';

// Utils
import { IDesignModes } from './components/Canvas/Types/designModes';

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
      return <Waves {...canvasDimensions} svgRef={svgRef} seed={seed} {...waveOptions.get} />;
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
      <InitialAnimation />
      <Flex {...wrapperStyles}>
        <TemplateMenu activeDesign={design} setDesign={setDesign}></TemplateMenu>
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
