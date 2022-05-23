import { useState } from 'react';
import { IWaveAllProps } from '../../../Types/waveProps';
import { IWaveAllSetterProps } from '../../../Types/waveSetterProps';

const useWaveOptions = (): {
  get: IWaveAllProps;
  set: IWaveAllSetterProps;
} => {
  const [solid, setSolid] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>('#002438');
  const [startColor, setStartColor] = useState<string>('#ff0005ff');
  const [endColor, setEndColor] = useState<string>('#ff0092ff');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000061');

  const [balance, setBalance] = useState<number>(0.5);
  const [velocity, setVelocity] = useState<number>(1);
  const [breaks, setBreaks] = useState<number>(4);
  const [stacks, setStacks] = useState<number>(2);
  const [distance, setDistance] = useState<number>(100);
  const [strokeShrink, setStrokeShrink] = useState<boolean>(false);
  const [strokeWidth, setStrokeWidth] = useState<number>(1);
  const [smooth, setSmooth] = useState<number>(0.2);

  return {
    get: {
      smooth,
      bgColor,
      startColor,
      endColor,
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
      setBgColor,
      setStartColor,
      setEndColor,
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
