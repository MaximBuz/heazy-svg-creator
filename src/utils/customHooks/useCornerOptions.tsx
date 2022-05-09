import { useState } from 'react';
import { ICornerProps } from '../types/cornerProps';
import { ICornerSetterProps } from '../types/cornerSetterProps';

const useCornerOptions = (): {
  get: Omit<ICornerProps, 'seed' | 'width' | 'height' | 'svgRef'>;
  set: ICornerSetterProps;
} => {
  const [solid, setSolid] = useState<number>(0);
  const [smooth, setSmooth] = useState<number>(1);
  const [direction, setDirection] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>('#002438');
  const [startWaveColor, setStartWaveColor] = useState<string>('#dc0307');
  const [stopWaveColor, setStopWaveColor] = useState<string>('#910060');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000061');
  const [balance, setBalance] = useState<number>(0.5);
  const [velocity, setVelocity] = useState<number>(10);
  const [breaks, setBreaks] = useState<number>(2);
  const [stacks, setStacks] = useState<number>(0);
  const [distance, setDistance] = useState<number>(5);
  const [strokeShrink, setStrokeShrink] = useState<boolean>(false);
  const [strokeWidth, setStrokeWidth] = useState<number>(1);

  return {
    get: {
      type: smooth === 1 ? 'smooth' : 'peak',
      direction,
      bgColor,
      startWaveColor,
      stopWaveColor,
      shadowX,
      shadowY,
      shadowSD,
      shadowColor,
      balance,
      velocity,
      breaks,
      stacks,
      distance,
      stroke: solid ? true : false,
      solid,
      strokeShrink,
      strokeWidth,
    },
    set: {
      setSolid,
      setSmooth,
      setDirection,
      setBgColor,
      setStartWaveColor,
      setStopWaveColor,
      setShadowX,
      setShadowY,
      setShadowSD,
      setShadowColor,
      setBalance,
      setVelocity,
      setBreaks,
      setStacks,
      setDistance,
      setStrokeShrink,
      setStrokeWidth,
    },
  };
};

export default useCornerOptions;
