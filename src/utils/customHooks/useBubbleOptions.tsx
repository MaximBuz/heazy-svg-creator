import { useState } from 'react';
import { IBubbleProps } from '../types/bubbleProps';
import { IBubbleSetterProps } from '../types/bubbleSetterProps';

const useBubbleOptions = (): {
  get: Omit<IBubbleProps, 'seed' | 'width' | 'height' | 'svgRef'>;
  set: IBubbleSetterProps;
} => {
  const [solid, setSolid] = useState<number>(0);
  const [size, setSize] = useState<number>(50);
  const [bgColor, setBgColor] = useState<string>('#002438');
  const [startColor, setStartColor] = useState<string>('#dc0307');
  const [endColor, setEndColor] = useState<string>('#910060');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000061');
  const [velocity, setVelocity] = useState<number>(100);
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
