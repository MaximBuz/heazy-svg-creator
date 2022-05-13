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
  const [bgColor, setBgColor] = useState<string>('#ff0071ff');
  const [startWaveColor, setStartWaveColor] = useState<string>('#95ffda');
  const [stopWaveColor, setStopWaveColor] = useState<string>('#95ffa1ff');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000061');
  const [balance, setBalance] = useState<number>(0.3);
  const [velocity, setVelocity] = useState<number>(1);
  const [breaks, setBreaks] = useState<number>(4);
  const [stacks, setStacks] = useState<number>(0);
  const [distance, setDistance] = useState<number>(100);
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
