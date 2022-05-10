import { useState } from 'react';
import { IMarkerProps } from '../types/markerProps';
import { IMarkerSetterProps } from '../types/markerSetterProps';

const useMarkerOptions = (): {
  get: Omit<IMarkerProps, 'seed' | 'width' | 'height' | 'svgRef'>;
  set: IMarkerSetterProps;
} => {
  const [lineCap, setLineCap] = useState<'butt' | 'round' | 'square'>('butt');
  const [lineJoin, setLineJoin] = useState<'bevel' | 'miter' | 'round'>('bevel');
  const [strokeWidth, setStrokeWidth] = useState<number>(130);
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [startColor, setStartColor] = useState<string>('#000000');
  const [endColor, setEndColor] = useState<string>('#000000');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000000');
  const [markerHeight, setMarkerHeight] = useState<number>(25);
  const [zickZacks, setzickZacks] = useState<number>(10);
  const [ghost, setGhost] = useState<boolean>(true);
  const [ghostStartColor, setGhostStartColor] = useState<string>('#dedede');
  const [ghostEndColor, setGhostEndColor] = useState<string>('#bdbdbd');
  const [size, setSize] = useState<number>(150);
  const [padding, setPadding] = useState<number>(30);
  const [mirror, setMirror] = useState<boolean>(false);
  const [yPosition, setYPosition] = useState<number>(500);
  const [pressure, setPressure] = useState<number>(0);

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
      mirror,
      yPosition,
      pressure,
      ghostStartColor,
      ghostEndColor,
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
      setMirror,
      setYPosition,
      setPressure,
      setGhostStartColor,
      setGhostEndColor,
    },
  };
};

export default useMarkerOptions;
