import { useState } from 'react';
import { IWaveProps } from '../types/waveProps';
import { IWaveSetterProps } from '../types/waveSetterProps';

const useWaveOptions = (): {
  get: Omit<IWaveProps, 'seed' | 'width' | 'height' | 'svgRef'>;
  set: IWaveSetterProps;
} => {
  const [solid, setSolid] = useState<number>(0);
  const [smooth, setSmooth] = useState<number>(1);
  const [direction, setDirection] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>('#002438');
  const [startWaveColor, setStartWaveColor] = useState<string>('#ff0005ff');
  const [stopWaveColor, setStopWaveColor] = useState<string>('#ff0092ff');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000061');
  const [balance, setBalance] = useState<number>(0.5);
  const [velocity, setVelocity] = useState<number>(0.5);
  const [breaks, setBreaks] = useState<number>(2);
  const [stacks, setStacks] = useState<number>(4);
  const [distance, setDistance] = useState<number>(3.5);
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

export default useWaveOptions;
