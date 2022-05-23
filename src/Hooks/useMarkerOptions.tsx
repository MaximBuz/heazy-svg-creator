import { useState } from 'react';
import { IMarkerAllProps } from '../Types/markerProps';
import { IMarkerAllSetterProps } from '../Types/markerSetterProps';

const useMarkerOptions = (): {
  get: IMarkerAllProps;
  set: IMarkerAllSetterProps;
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
  const [ghostSize, setGhostSize] = useState<number>(1.1);
  const [ghostStartColor, setGhostStartColor] = useState<string>('#dedede');
  const [ghostEndColor, setGhostEndColor] = useState<string>('#bdbdbd');
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
      padding,
      mirror,
      yPosition,
      pressure,
      ghostStartColor,
      ghostEndColor,
      ghostSize,
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
      setPadding,
      setMirror,
      setYPosition,
      setPressure,
      setGhostStartColor,
      setGhostEndColor,
      setGhostSize,
    },
  };
};

export default useMarkerOptions;
