import { useState } from 'react';
import { IBubbleAllProps } from '../Types/bubbleProps';
import { IBubbleAllSetterProps } from '../Types/bubbleSetterProps';

const useBubbleOptions = (): {
  get: IBubbleAllProps
  set: IBubbleAllSetterProps;
} => {
  const [solid, setSolid] = useState<number>(0);
  const [size, setSize] = useState<number>(150);
  const [bgColor, setBgColor] = useState<string>('#FBAE3C');
  const [startColor, setStartColor] = useState<string>('#001e35');
  const [endColor, setEndColor] = useState<string>('#001b2f');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000000');
  const [velocity, setVelocity] = useState<number>(50);
  const [strokeWidth, setStrokeWidth] = useState<number>(1);

  return {
    get: {
      stroke: solid ? true : false,
      solid,
      strokeWidth,
      startColor,
      endColor,
      bgColor,
      shadowX,
      shadowY,
      shadowSD,
      shadowColor,
      velocity,
      size,
    },
    set: {
      setSize,
      setSolid,
      setBgColor,
      setStartColor,
      setEndColor,
      setShadowX,
      setShadowY,
      setShadowSD,
      setShadowColor,
      setVelocity,
      setStrokeWidth,
    },
  };
};

export default useBubbleOptions;
