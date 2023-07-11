// React
import { useState } from 'react';

// Features
import {
  InitialAnimation,
  CanvasControls,
  TemplateMenu,
  OptionsMenu,
  UserMenu,
} from './features';

// Context
import { AuthProvider } from './contexts/Auth';
import { useDesign } from './contexts/Design';
import { UserSpaceProvider } from './contexts/UserSpace';

// Styling
import { Flex, Container } from '@chakra-ui/react';
import useCanvasContent from './hooks/useCanvasContent';
import useOptionsContent from './hooks/useOptionsContent';

function App() {
  const { design, setDesign, designTypes } = useDesign();

  const { component: canvasContent, setSeed, canvasRef } = useCanvasContent();
  const { component: optionsContent } = useOptionsContent();

  const [zoom, setZoom] = useState<number>(1);

  return (
    <>
      <InitialAnimation />
      <Flex
        direction="row"
        bgColor="#141820"
        overflow="hidden"
        justifyContent="space-between"
        w="100vw"
        h="100vh"
      >
        <UserSpaceProvider>
          <TemplateMenu
            designTypes={designTypes}
            activeDesign={design.id}
            setDesign={setDesign}
          />

          <AuthProvider>
            <UserMenu />

            <Container
              centerContent
              transform={`scale(${zoom})`}
              transition="transform 0.3s cubic-bezier(0,.5,.5,1)"
              justifyContent="center"
              alignContent="center"
              padding="3"
              m="0"
            >
              {canvasContent}
            </Container>

            <CanvasControls
              svgRef={canvasRef}
              currentZoom={zoom}
              setSeed={setSeed}
              setZoom={setZoom}
            />
          </AuthProvider>

          <OptionsMenu svgRef={canvasRef}>{optionsContent}</OptionsMenu>
        </UserSpaceProvider>
      </Flex>
    </>
  );
}

export default App;
