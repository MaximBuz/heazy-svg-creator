// React
import { useRef, useState } from 'react';

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
} from './features';

// Styling
import { Flex, Container, FlexProps, ContainerProps } from '@chakra-ui/react';

// Utils
import { AuthProvider } from './contexts/Auth';
import UserMenu from './features/UserMenu';
import { useDesign } from './contexts/Design';

function App() {
  /* --------- CANVAS STATE --------- */
  const [seed, setSeed] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(1);
  const [setWidth, setHeight, canvasDimensions] = useCanvasDimensions(800, 600);
  const svgRef = useRef<SVGAElement | null>(null);

  /* --------- OPTIONS MENU STATE --------- */
  const { design, setDesign } = useDesign();

  /* --------- RENDERING --------- */
  const renderCanvas = () => {
    if (design === 'waves') return <Waves {...canvasDimensions} svgRef={svgRef} seed={seed} />;
    if (design === 'bubble') return <Bubble {...canvasDimensions} svgRef={svgRef} seed={seed} />;
    if (design === 'corners') return <Corners {...canvasDimensions} svgRef={svgRef} seed={seed} />;
    if (design === 'marker') return <Marker {...canvasDimensions} svgRef={svgRef} seed={seed} />;
  };

  const renderOptionsMenu = () => {
    if (design === 'waves') return <WaveOptions />;
    if (design === 'bubble') return <BubbleOptions />;
    if (design === 'corners') return <CornerOptions />;
    if (design === 'marker') return <MarkerOptions />;
  };

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
