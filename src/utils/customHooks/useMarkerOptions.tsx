import { useState } from 'react';
import { IMarkerProps } from '../types/markerProps';
import { IMarkerSetterProps } from '../types/markerSetterProps';

const useMarkerOptions = (): {
  get: Omit<IMarkerProps, 'seed' | 'width' | 'height' | 'svgRef'>;
  set: IMarkerSetterProps;
} => {
  const [lineCap, setLineCap] = useState<'butt' | 'round' | 'square'>("butt");
  const [lineJoin, setLineJoin] = useState< 'bevel' | 'miter'  | 'round'>("bevel");
  const [strokeWidth, setStrokeWidth] = useState<number>(150);
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [startColor, setStartColor] = useState<string>('#000000');
  const [endColor, setEndColor] = useState<string>('#000000');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000000');
  const [markerHeight, setMarkerHeight] = useState<number>(25);
  const [zickZacks, setzickZacks] = useState<number>(7);
  const [ghost, setGhost] = useState<boolean>(true);
  const [size, setSize] = useState<number>(100);
  const [padding, setPadding] = useState<number>(100);
  const [mirror, setMirror] = useState<boolean>(false);

  return {
    get: {
      lineJoin,
      lineCap,
      strokeWidth,
      startColor,
      endColor,
      bgColor,
      shadowX,
      shadowY,
      shadowSD,
      shadowColor,
      markerHeight,
      zickZacks,
      ghost,
      size,
      padding,
      mirror
    },
    set: {
      setLineJoin,
      setLineCap,
      setStrokeWidth,
      setStartColor,
      setEndColor,
      setBgColor,
      setShadowX,
      setShadowY,
      setShadowSD,
      setShadowColor,
      setMarkerHeight,
      setzickZacks,
      setGhost,
      setSize,
      setPadding,
      setMirror
    },
  };
};

export default useMarkerOptions;
