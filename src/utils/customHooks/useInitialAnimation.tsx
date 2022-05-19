import { useEffect, useState } from 'react';

function useInitialAnimation(): [boolean, number] {
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

  return [isRunning, opacity];
}

export default useInitialAnimation;
