import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import LogoAnimation from '../Assets/LogoAnimation.json';

function InitialAnimation() {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    (async () => {
      await setTimeout(() => {
        setOpacity(0);
      }, 2000);

      await setTimeout(() => {
        setIsRunning(false);
      }, 4000);
    })();
  }, []);

  if (isRunning) {
    return (
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
          opacity: opacity,
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
    );
  }
}

export default InitialAnimation;
