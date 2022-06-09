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
  TemplateMenu,
  OptionsMenu,
} from './features';
import UserMenu from './features/UserMenu';

// Styling
import { Flex, Container, FlexProps, ContainerProps } from '@chakra-ui/react';

// Context
import { AuthProvider } from './contexts/Auth';
import { useDesign } from './contexts/Design';
import { UserSpaceProvider } from './contexts/UserSpace';

function App() {
  /* --------- STATE --------- */
  const { design, setDesign, designTypes } = useDesign();
  const [seed, setSeed] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(1);
  const svgRef = useRef<SVGAElement | null>(null);

  /* --------- RENDERING --------- */
  const renderCanvas = () => {
    if (design.name === 'waves') return <Waves svgRef={svgRef} seed={seed} />;
    if (design.name === 'bubble') return <Bubble svgRef={svgRef} seed={seed} />;
    if (design.name === 'corners') return <Corners svgRef={svgRef} seed={seed} />;
    if (design.name === 'marker') return <Marker svgRef={svgRef} seed={seed} />;
  };

  const renderOptionsMenu = () => {
    if (design.name === 'waves') return <WaveOptions />;
    if (design.name === 'bubble') return <BubbleOptions />;
    if (design.name === 'corners') return <CornerOptions />;
    if (design.name === 'marker') return <MarkerOptions />;
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
        <TemplateMenu designTypes={designTypes} activeDesign={design.id} setDesign={setDesign}></TemplateMenu>
        <UserSpaceProvider>
          <AuthProvider>
            <UserMenu />
            <Container {...canvasStyles}>{renderCanvas()}</Container>
            <CanvasControls svgRef={svgRef} seed={seed} setSeed={setSeed} setZoom={setZoom} />
          </AuthProvider>
          <OptionsMenu svgRef={svgRef}>{renderOptionsMenu()}</OptionsMenu>
        </UserSpaceProvider>
      </Flex>
    </>
  );
}

export default App;
